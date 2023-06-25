#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define pi 3.14159265359

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(1.1,3.7)),dot(p,vec2(2.5,1.3))))*4.5) / pi + u_time;
}

void main() {
    vec2 st = (gl_FragCoord.xy * 2. - u_resolution) / min(u_resolution.x,u_resolution.y) ;
    vec3 color = vec3(0.0118, 0.0118, 0.0118);

    // Scale
    st *= 6.;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float m_dist = 1.;  // minimum distance

    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(x),float(y));

            // Random position from current + neighbor place in the grid
            vec2 point = random2(i_st + neighbor) - u_time + abs(radians(u_time * pi));

			// Animate the point
            point = 0.3 + 0.3*tan(u_time + 9.2831*point + st * pi);

			// Vector between the pixel and the point
            vec2 diff = neighbor + point - f_st;

            // Distance to the point
            float dist = length(diff) - abs(sin(pi));

            // Keep the closer distance
            m_dist = min(m_dist, dist);
        }
    }  
    // Draw the min distance (distance field)
    color += m_dist;

    // Draw cell center
    color += 1.-step(.03, m_dist);

    // Draw grid

    // Show isolines
     color -= step(.1,abs(m_dist))*.1;

    gl_FragColor = vec4(tan(color*color),1.);
}

