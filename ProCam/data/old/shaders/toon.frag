//
// Fragment shader for cartoon-style shading
//
// Author: Philip Rideout
//
// Copyright (c) 2004 3Dlabs Inc. Ltd.
//
// See 3Dlabs-License.txt for license information
//

uniform vec3 DiffuseColor;
uniform vec3 PhongColor;
uniform float Edge;
uniform float Phong;
varying vec3 Normal;

void main (void)
{
	vec3 color = DiffuseColor;
	float f = dot(vec3(0,0,1),Normal);
	if (abs(f) < Edge)
		color = vec3(0.2);
	if (f > Phong)
		color = PhongColor;

	gl_FragColor = vec4(color, 1);
	//	gl_FragColor = vec4(Normal / 2 + vec3(0.5, 0.5, 0.5), 1.0); 
	//	gl_FragColor = vec4(DiffuseColor, 1.0);
 

	/* if(Phong > 0.2) */
	/*   gl_FragColor = vec4(Edge, 0.0, 0.0, 1.0); */
	/* else */
	/*   gl_FragColor = vec4(0.0, Edge, 0.0, 1.0); */
}
