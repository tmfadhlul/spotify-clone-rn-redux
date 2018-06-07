#version 300 es

precision mediump float;

uniform vec4 uSnowColor;
uniform sampler2D uTexture;
uniform vec2 uLightPos;
uniform vec2 uCoverArtCenter;
uniform float uLightsOn;

uniform vec3 uSporeColor;
uniform float uSporeAlpha;
uniform float uSporeLightResponse;
uniform float uSporeLightDistanceFactor;

in float vSize;
in float vDepth;
in vec2 vPosition;
in vec2 vPointCoord;
in float vSeed;

out vec4 oColor;


void main(void) {
    float gridStep = 1.0 / 8.0;
    float i = vSeed * 16.0;
    float texX = floor(mod(i, 8.0)) / 8.0;
    float texY = floor(i / 8.0) / 8.0;
    vec4 texColor = texture(uTexture, vec2(texX, texY) + vPointCoord / 8.0);

    float lightDistance = length(vPosition - uLightPos);
    float lightFactor = 1.0 - smoothstep(0.0, 0.1, lightDistance);
    lightFactor *= 4.0;
    lightFactor = clamp(lightFactor, 0.0, 1.0);

    float lightHalfAngle = 20.0 / 180.0 * 3.1415; //TODO: Constant & Uniform
    vec2 dir = vPosition - uLightPos;
    vec2 lightDir = uCoverArtCenter - uLightPos;
    float cosA = dot(dir, lightDir) / (length(dir)*length(lightDir));
    lightFactor += step(cos(lightHalfAngle), cosA) + (1.0-smoothstep(cos(lightHalfAngle), cos(lightHalfAngle+0.07), cosA));
    lightFactor *= uLightsOn;

    vec3 darkColor = vec3(0.16, 0.26, 0.33);
    vec3 lightColor = vec3(0.84, 1.0, 1.0);
    vec3 color = mix(darkColor, lightColor, lightFactor);

    float size = (vSize - 0.4) / (1.7 - 0.4) * 0.8;
    oColor = vec4(color, texColor.a * (1.0 - size) * 0.5);
}
