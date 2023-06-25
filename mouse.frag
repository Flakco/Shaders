#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
#define pi 3.14159265359

void main() {
	
	vec2 uv = (gl_FragCoord.xy * 1.0 - u_mouse) / max(u_resolution.x,u_resolution.y);

	float color=0.1;


	color = 0.01 * abs(cos(u_time)) + 0.01 / length(uv) * abs(cos(u_time));

	gl_FragColor = vec4(color,-1.0,-1.0,1.0);
}