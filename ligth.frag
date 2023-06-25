#ifdef GL_ES
precision mediump float;
#endif

#define pi 3.14159265359
uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x,u_resolution.y);
    

    float color=pi;
    float rad = length(coord) * 0.1 + u_time;
    float ang = atan(coord.x,coord.y);
    float e = sin(rad * pi * 3.0);

    color = 0.0000001 * abs(cos(u_time)) + 0.06 / length(coord) * abs(cos(u_time));

    color += 0.000001 * abs(sin(coord.y)) * u_time + 0.000001;
    color += 0.000001 + abs(sin(coord.y)) * u_time + 0.000001;
    color += 0.000001 + abs(sin(coord.y)) * u_time + 0.000001;

    color -= 0.000001 * abs(sin(coord.y)) * u_time + 0.000001;
    color -= 0.000001 + abs(sin(coord.y)) * u_time + 0.000001;
    color -= 0.000001 + abs(sin(coord.y)) * u_time + 0.000001;

    color += 0.001 * abs(cos(u_time)) + 0.01 / length(coord) * abs(cos(u_time));

    gl_FragColor = vec4(vec3(color,e, e * 2.0), 4.0);


}