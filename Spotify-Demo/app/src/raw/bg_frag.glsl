#version 300 es

precision highp float;

out vec4 oColor;

in vec2 vPosition;

uniform vec4 uTopColor;
uniform vec4 uBottomColor;
uniform vec2 uThumbCenter;
uniform vec2 uCoverArtCenter;
uniform float uThumbRadius;
uniform float uButtonOutlineWidth;
uniform float uLightConeHalfCos;
uniform float uLightConeHalfSin;

uniform float uLayerOpacity;
uniform vec3 uBackgroundColor;
uniform sampler2D uNoiseTexture;
uniform mat3 uTranslateMatrix;
uniform float uLightsOn;
uniform float uTime;

vec4 blend(vec4 dst, vec4 src) {
    return dst * (1.0 - src.a) + src * src.a;
}

vec3 rgb(float r, float g, float b) {
    return vec3(r / 255.0, g / 255.0, b / 255.0);
}

float random (in vec2 _st) { 
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))* 
        43758.5453123);
}

//***************************************************
// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
/*
BSD License 2.0

Copyright (c) 2014, Morgan McGuire
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + 
            (c - a)* u.y * (1.0 - u.x) + 
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), 
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}
//***************************************************

//***************************************************
// The code below is slightly modified version of the smoke
// shader that can be found here: https://thebookofshaders.com/13/
//
// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com
/*
The MIT License (MIT)

Copyright (c) 2015 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
float smoke(vec2 st, float gradient) {
    if (gradient < 0.05) return 0.0;
    float time = uTime / 40.0;
    st = st * 3.0;

    vec3 color = vec3(0.0);

    vec2 q = vec2(0.0);
    q.x = fbm( st + 0.00);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*time );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*time);

    float f = fbm(st+r);

    color = mix(color,
                vec3(0.666667,1,1),
                clamp(length(r.x),0.0,1.0));

    return f;
}
//***************************************************

float rstep(in float t, in float x) {
    return 1.0 - step(t, x);
}

float rsmoothstep(in float a, in float b, in float x) {
    return 1.0 - smoothstep(a, b, x);
}

/* Calculates the value for the cone of light. The cone is cut in a way
 * to make it look like the light from a source of radius d.
 *   1.0   - it's within the cone
 * 1.0-0.0 - it's fading out
 *   0.0   - outside the cone
 *
 * dir  - direction from origin
 * d    - radius of the 'light source'
 * cosL - cosine of the light cone's half angle
 * sinL - sine of the light cone's half angle
 * fade - fade out factor. The bigger it is, the wider the fade out area
 */
float lightValue(in vec3 dir, in float d, in float cosL, in float sinL, in float fade) {
    // How much do we need to move the origin back, so that it would appear that
    // our light cone has a specific base
    float shift = d * cosL / sinL;
    dir.x += shift;
    float cosA = dir.x / length(dir.xy);
    float light =  smoothstep(cosL-fade, cosL, cosA);
    dir.x -= shift;
    light *= step(0.0, dir.x );
    light += rstep(d, length(dir.xy))*rstep(0.0, dir.x);
    light += rsmoothstep(d, d*1.65, length(dir.xy))*rstep(0.0, dir.x);
    return light;
}

/* Calculates the value for the light source (spoiler: it looks like a little circle)
 *
 * pos    - coordinates of the point of interest
 * center - the position of the light source
 * radius - the radius of the light source
 */
float lightSource(vec2 pos, vec2 center, float radius) {
    vec2 diff = pos - center;
    return radius / dot(diff, diff);
}

// see: www.iquilezles.org/www/articles/palettes/palettes.htm
vec3 color(float t) {
    // These values are magic, modify at your own peril
    vec3 a = vec3(0.1, 0.2, 0.7);
    vec3 b = vec3(0.1, 0.2, 0.5);
    vec3 c = vec3(1.0);
    vec3 d = vec3(0.1, 0.1, 0.5);
    return (a + b * cos(((c * t + d) * 6.2831852)));
}

void main(void) {

    vec2 uv = vPosition;

    // This translate matrix
    mat3 mv = uTranslateMatrix;

    float cosL = uLightConeHalfCos;
    float sinL = uLightConeHalfSin;

    // Calculating the light within the cone
    vec3 dir = mv * vec3(uv, 1.0); // It is actually vec2, but 'z' is used for matrix transformations
    float d = uThumbRadius;

    float light = lightValue(dir, d * 2.0, cosL, sinL, 0.05);

    float gradient = lightValue(dir, d * 0.025, cos(radians(0.1)), sin(radians(0.1)), 0.015);
    gradient *= gradient;
    gradient = 0.15*rsmoothstep(0.0, 0.7, length(dir.xy))*gradient;
    gradient += 0.4*rsmoothstep(0.0, 0.5, length(dir.xy))*light;
    float cosA = dir.x / length(dir.xy);

    float lightSource = lightSource(dir.xy, vec2(0.0), d*0.05);

    light = clamp(0.0, 1.0, light) * uLightsOn;
    float distance = length(uv - uThumbCenter);

    vec3 bgColor = uBackgroundColor * smoothstep(0.0, 1.0, vPosition.y);
    
    float smokeValue = smoke(uv, gradient);
    smokeValue = clamp(0.0, 1.0, smokeValue * (gradient - 0.05) * (1.0 - gradient)) * light;
    gradient *= smokeValue * 8.0;

    gradient = clamp(0.0, 1.0, gradient);

    gradient *= uLightsOn;
    lightSource *= uLightsOn;

    vec4 lightColor = vec4(color(5.133)*gradient*12.0, gradient);
    vec4 lightSourceColor = vec4(color(5.133)*lightSource*12.0, lightSource);

    vec4 bgAndGradient = vec4(bgColor, 0.2 + 0.7*(1.0 - light)) * (1.0 - lightColor.a) + lightColor;
    oColor = mix(bgAndGradient, lightSourceColor, lightSourceColor.a);
}