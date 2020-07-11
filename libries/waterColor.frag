precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

void main( void )
{

	vec2 uv = ( gl_FragCoord.xy / resolution.xy )*4.0;

	vec2 uv0=uv;
	float i0=1.2;
	float i1=0.95;
	float i2=1.5;
	vec2 i4=vec2(0.0,0.0);
	float a = atan(uv.x, uv.y);
	for(int s=0;s<10;s++)
	{
		vec2 r;
		r=vec2(cos(uv.y*i0-i4.y/i1),sin(uv.x*i0+i4.x/i1))/i2;
		r+=vec2(-r.y,r.x)/100.;
		uv.x -= mouse.x / 100.0;
		uv.y += mouse.y / 100.0;
		uv.x+=r.x * sin(time/10.0+mouse.x/50.0);
		uv.y+=r.y * cos(time/10.0+mouse.y/50.0);



		i0*=1.93;
		i1*=1.25;
		i2*=1.7;
		i4+=r.xy*1.0+0.5*time*i1;
	}
	float r=sin(uv.x-time)*0.5+0.5;
	float b=sin(uv.y+time)*0.5+0.5;
	float g=sin((sqrt(uv.x*uv.x+uv.y*uv.y)+time))*0.5+0.05;
	vec3 c=vec3(r,g,b);
	gl_FragColor = vec4(c,0.8);
}
