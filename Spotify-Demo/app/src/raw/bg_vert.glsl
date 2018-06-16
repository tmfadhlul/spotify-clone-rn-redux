#version 300 es

uniform mat4 uProjMat;

in vec2 aPosition;

out vec2 vPosition;

void main(void) {
    gl_Position = uProjMat * vec4(aPosition, 0.0, 1.0);
    vPosition = aPosition;
}
