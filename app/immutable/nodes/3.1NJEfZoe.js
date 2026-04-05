import{a as g,f as w}from"../chunks/BihSMTk1.js";import{i as b}from"../chunks/DRunjKAj.js";import{o as P}from"../chunks/CZB5911S.js";import{Z as N,a0 as y,z as n,a4 as m,a1 as O,B as I,a2 as F,a5 as E}from"../chunks/BQ4jR4zi.js";import{b as A}from"../chunks/DzyT6DQ0.js";import{p as x}from"../chunks/ChheMTb3.js";function D(o,l,a){const e=o.createShader(l)??void 0;if(e===void 0){console.log("compile failed");return}if(o.shaderSource(e,a),o.compileShader(e),!o.getShaderParameter(e,o.COMPILE_STATUS))throw new Error(o.getShaderInfoLog(e)??void 0);return e}function W(o,l,a){const e=o.createProgram(),c=D(o,o.VERTEX_SHADER,l),f=D(o,o.FRAGMENT_SHADER,a);if(c!==void 0&&f!==void 0){if(o.attachShader(e,c),o.attachShader(e,f),o.linkProgram(e),!o.getProgramParameter(e,o.LINK_STATUS))throw new Error(o.getProgramInfoLog(e)??void 0);o.useProgram(e)}return e}const U=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,V=`
precision highp float;

uniform vec3  iResolution;
uniform float iSecsInDay;

const int C_BG   = 0;
const int C_SECS = 1;
const int C_MINS = 2;
const int C_HRS  = 3;
const int C_DEC0 = 4;
const int C_DEC1 = 5;

uniform vec3 uCol[6];

// ── Constants ────────────────────────────────────────────────────────────────
const float TAU = 6.283185;

const float S_PER_M        =    60.0;
const float S_PER_H        =  3600.0;
const float ARC            = 5./12.;

const float ACCENT_H_WIDTH = 1./30.;
const float ACCENT_START   = 0.5 - ACCENT_H_WIDTH;
const float ACCENT_END     = 0.5 + ACCENT_H_WIDTH;

const float SEP      = .01;
const float IN_RIM   = .3;
const float DIV_HM   = .70;
const float DIV_MS   = .92;
const float OUT_RIM  = .98;
const float DECL_FRAC    = 0.15;
const float DECL_FRAC_12 = 0.5;

const float H_LO = IN_RIM + SEP;
const float H_HI = DIV_HM - SEP;
const float M_LO = DIV_HM + SEP;
const float M_HI = DIV_MS - SEP;
const float S_LO = DIV_MS + SEP;
const float S_HI = OUT_RIM - SEP;

const float M_MID = (M_HI + M_LO) * 0.5;
const float M_WID = (M_HI - M_LO);

const float D_LO_12 = M_MID - M_WID * 0.5 * DECL_FRAC_12;
const float D_LO    = M_MID - M_WID * 0.5 * DECL_FRAC;
const float D_HI    = M_MID + M_WID * 0.5 * DECL_FRAC;

const float NOTCH_W = 1./120.;
const float CLICK_S = 0.5;

float smooth_ring(float t, float theta, float secs_per_unit, float units_per_circle) {
    float units = mod(t / secs_per_unit, units_per_circle);
    return mod(theta + units / units_per_circle, 1.0);
}

float click_ring(float t, float theta, float secs_per_unit, float units_per_circle) {
    float whole_units = floor(mod(t / secs_per_unit, units_per_circle));
    float delay = clamp(mod(t, secs_per_unit), 0.0, CLICK_S) / CLICK_S - 1.0;
    float total_units = whole_units + delay;
    return mod(theta + total_units / units_per_circle, 1.0);
}

float dec(float theta) {
    float hour       = theta * 12.0;
    float base_pos   = mod(hour, 2.);
    float base       = step(base_pos, 1.) - step(base_pos, 0.0);
    float accent_pos = mod(hour, 1.);
    float accent     = step(accent_pos, ACCENT_END) - step(accent_pos, ACCENT_START);
    return base + accent - 2.0 * base * accent;
}

float at_top(float theta) {
    return 1. - (step(theta, 1. - NOTCH_W) - step(theta, NOTCH_W));
}

void main() {
    float t   = iSecsInDay;
    vec2  uv  = (2. * gl_FragCoord.xy - iResolution.xy) / iResolution.y;
    float theta = (atan(uv.x, -uv.y) / TAU) + 0.5;

    float u_s = smooth_ring(t, theta, 1.0,     60.0);
    float u_m = click_ring (t, theta, S_PER_M, 60.0);
    float u_h = click_ring (t, theta, S_PER_H, 12.0);

    float r    = length(uv);
    float on_s = step(r, S_HI) - step(r, S_LO);
    float on_d = step(r, D_HI) - step(r, mix(D_LO, D_LO_12, at_top(theta)));
    float on_m = (1. - on_d) * (step(r, M_HI) - step(r, M_LO));
    float on_h = step(r, H_HI) - step(r, H_LO);

    float style = dec(theta);
    vec3  dec_c = mix(uCol[C_DEC0], uCol[C_DEC1], style);

    vec3 col = uCol[C_BG];
    col = mix(col, uCol[C_SECS],  on_s * step(u_s, ARC));
    col = mix(col, uCol[C_MINS], on_m * step(u_m, ARC));
    col = mix(col, uCol[C_HRS], on_h * step(u_h, ARC));
    col = mix(col, dec_c,  on_d);

    gl_FragColor = vec4(col, 1.0);
}
`;var k=w('<div class="clockpane svelte-ylinfx"><canvas></canvas></div>');function X(o,l){N(l,!1);let a=E(),e=E();P(()=>{const _=x(new URLSearchParams(window.location.search)),t=n(a).getContext("webgl")||n(a).getContext("experimental-webgl");if(!t||t==null){document.body.innerText="WebGL not supported";return}const u=W(t,U,V),M=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,M),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),t.STATIC_DRAW);const C=t.getAttribLocation(u,"a_pos");t.enableVertexAttribArray(C),t.vertexAttribPointer(C,2,t.FLOAT,!1,0,0);const p=t.getUniformLocation(u,"iResolution"),R=t.getUniformLocation(u,"iSecsInDay"),v=t.getUniformLocation(u,"uCol[0]");t.uniform3f(p,n(a).width,n(a).height,1);function h(){const s=Math.min(window.innerWidth,window.innerHeight);m(a,n(a).width=s),m(a,n(a).height=s),t.viewport(0,0,s,s),t.uniform3f(p,n(a).width,n(a).height,1)}window.addEventListener("resize",h),h();const i=_.colors,T=new Float32Array([i.bg,i.secs,i.mins,i.hrs,i.decHi,i.decLo].flatMap(s=>{const r=parseInt(s.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}));t.uniform3fv(v,T),m(e,n(e).style.background=_.colors.bg);let d=0;const H=1e3/30;function S(s){if(s-d>=H){d=s;const r=new Date,L=r.getHours()*3600+r.getMinutes()*60+r.getSeconds()+r.getMilliseconds()/1e3;t.uniform1f(R,L),t.drawArrays(t.TRIANGLES,0,6)}requestAnimationFrame(S)}requestAnimationFrame(S)}),b();var c=k(),f=O(c);A(f,_=>I(a,_),()=>n(a)),F(c),A(c,_=>I(e,_),()=>n(e)),g(o,c),y()}export{X as component};
