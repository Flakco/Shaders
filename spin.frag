#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
#define pi 3.14159265359;

float noise1d(float value){
  return cos(value + cos(value * 90.0) * 100.0) * 0. + 1.;
}

void main(){
  vec2 coord = (gl_FragCoord.xy / u_resolution);
  vec3 color = vec3(0.2667, 1.0, 0.0235);
  vec3 color2 = vec3(0.0, 0.0, 0.0);
  vec2 translate = vec2(-0.5, -0.5);
  coord += translate;
  for(int i = 0; i < 9; i++){
    for (int x= 1; x < 6; x++) {

    float radius = 0.3;
    float radius2 = 0.2;
    float radius3 = 0.4;
    float radius4 = 0.41;
    float radius5 = 0.1;

    float rad = radians(360.0 / 33.) * float(i) * u_time * pi;
    float rad2 = radians(360.0 / 66.) * float(i) * u_time * pi;
    float rad3 = radians(360.0 / 99.) * float(i) * u_time * pi;

      float d = 3.;

    color += 0.0006 / length(coord + vec2(radius5 * cos(rad3), radius5 * sin(rad3)));
    color += 0.0006 / length(coord +- vec2(radius5 * cos(rad), radius5 * sin(rad)));

    color += 0.0006 / length(coord + vec2(radius * cos(rad3), radius * sin(rad3)));
    color += 0.0009 / length(coord + vec2(radius2 * cos(rad), radius2 * sin(rad)));
    //centro
    color += 0.0003 / length(coord.x +- coord / vec2(radius3 * cos(rad), radius3 * sin(rad)));


    color += 0.0006 / length(coord +- vec2(radius * cos(rad3), radius * sin(rad3)));
    color += 0.0009 / length(coord +- vec2(radius2 * cos(rad), radius2 * sin(rad)));
    //centro
    color += 0.0003 / length(coord.y +- coord / vec2(radius4 * cos(rad), radius4 * sin(rad)));


    color += 0.0001 / length(coord.y + coord.x / vec2(radius3 * cos(rad), radius3 * sin(rad)));
    color += 0.0001 / length(coord.x - coord.y / vec2(radius3 * cos(rad), radius3 * sin(rad)));

    color += 0.0009 / length(coord +- vec2(radius4 * cos(rad2), radius4 * sin(rad2)));
    color += 0.0009 / length(coord + vec2(radius4 * cos(rad2), radius4 * sin(rad2)));

    color -= 0.0009 * length(coord +- vec2(radius3 * cos(rad3), radius3 * sin(rad3)));
    color -= 0.0009 * length(coord + vec2(radius3 * cos(rad3), radius3 + sin(rad3)));


    d = length( abs(coord)-.0 ) - u_time;


    color -= 0.0009 * abs(sin(u_time)) + 0. * length(coord) * u_time;
    
    color += 0.0009 * abs(sin(u_time)) - 0. * length(coord) * u_time;

    color.r *= noise1d(u_time);
    }
  }

  gl_FragColor = vec4(color - 1.,1.) + vec4(color2, 0.);
}