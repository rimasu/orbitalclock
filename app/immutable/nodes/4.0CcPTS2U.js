import{b as V,a as D,f as Q}from"../chunks/BihSMTk1.js";import{i as oe}from"../chunks/DRunjKAj.js";import{h as W,c as q,a7 as L,$ as z,a as F,w as ge,aW as fe,e as G,af as ve,at as _e,aV as be,aS as ke,a6 as we,aX as Me,aY as ye,Z as he,aZ as J,a_ as Te,a0 as le,B as A,z as t,X as P,a5 as I,a4 as n,_ as Re,a3 as C,a1 as R,a2 as y,J as Ce,au as Ae}from"../chunks/BQ4jR4zi.js";import{e as K,s as He}from"../chunks/CMmQca7_.js";import{i as Se}from"../chunks/DUlbav5-.js";import{s as j}from"../chunks/D-3GbIIw.js";import{o as Ie}from"../chunks/CZB5911S.js";import{s as Ee,T as xe,r as U}from"../chunks/Bxq4LOer.js";import{b as Ne}from"../chunks/DzyT6DQ0.js";import{p as B}from"../chunks/BUtkWxDQ.js";import{g as Le}from"../chunks/iMqPllCi.js";function Oe(h,o,r=!1,a=!1,i=!1,f=!1){var c=h,e="";if(r){var d=h;W&&(c=q(L(d)))}z(()=>{var m=ge;if(e===(e=o()??"")){W&&F();return}if(r&&!W){m.nodes=null,d.innerHTML=e,e!==""&&V(L(d),d.lastChild);return}if(m.nodes!==null&&(fe(m.nodes.start,m.nodes.end),m.nodes=null),e!==""){if(W){G.data;for(var l=F(),k=l;l!==null&&(l.nodeType!==ve||l.data!=="");)k=l,l=_e(l);if(l===null)throw be(),ke;V(G,k),c=q(l);return}var T=a?Me:i?ye:void 0,w=we(a?"svg":i?"math":"template",T);w.innerHTML=e;var u=a||i?w:w.content;if(V(L(u),u.lastChild),a||i)for(;L(u);)c.before(L(u));else c.before(u)}})}const We=Math.PI*2,Pe=5/12,$=.5,ee=1/120,te=1/30,Be=.3,re=.7,ce=.92,De=.98,E=.01,ze=Be+E,je=re-E,Y=re+E,X=ce-E,Qe=ce+E,Ve=De-E,se=.15,Ue=.5,Ye=(Y+X)/2,Xe=X-Y;function ie(h){const o=h/2;function r(d,m){const l=d*o,k=m*o;return{lo:l,hi:k,mid:(l+k)/2,width:k-l}}const a=Ye*o,i=Xe*o,f=a-i*.5*se,c=a+i*.5*se,e=a-i*.5*Ue;return{hours:r(ze,je),minutes:r(Y,X),seconds:r(Qe,Ve),decoBand:{lo:f,hi:c,mid:(f+c)/2,width:c-f},decoNotch:{lo:e,hi:c,mid:(e+c)/2,width:c-e},R:o}}function v(h){return h*We-Math.PI/2}function Ze(h,o,r){return(h-1/o)%r/r}function ae(h,o,r){const a=Math.floor(h/o%r),i=Math.min(h%o,$)/$-1;return((a+i)/r+1)%1}function qe(h){return{s:Ze(h,1,60),m:ae(h,60,60),h:ae(h,3600,12)}}var Fe=Q("<canvas></canvas>");function Ge(h,o){he(o,!1);let r=B(o,"secsInDay",8,0),a=B(o,"theme",8),i=B(o,"size",8,320),f=B(o,"highlighted",8,null),c=I(),e=I(),d=I();function m(s,_,b,x,p=1){const{mid:H,width:S}=s[_];t(e).beginPath(),t(e).arc(s.R,s.R,H,v(b-Pe),v(b)),n(e,t(e).strokeStyle=x),n(e,t(e).globalAlpha=p),n(e,t(e).lineWidth=S),n(e,t(e).lineCap="butt"),t(e).stroke(),n(e,t(e).globalAlpha=1)}function l(s,_,b,x=1){n(e,t(e).globalAlpha=x);for(let p=0;p<12;p++){const H=p/12,S=p+.5,g=(S-te)/12,M=(S+te)/12,N=(p+1)/12;t(e).beginPath(),t(e).arc(s.R,s.R,s.decoBand.mid,v(H),v(g)),n(e,t(e).strokeStyle=p%2===0?_:b),n(e,t(e).lineWidth=s.decoBand.width),n(e,t(e).lineCap="butt"),t(e).stroke(),t(e).beginPath(),t(e).arc(s.R,s.R,s.decoBand.mid,v(g),v(M)),n(e,t(e).strokeStyle=p%2===0?b:_),n(e,t(e).lineWidth=s.decoBand.width),n(e,t(e).lineCap="butt"),t(e).stroke(),t(e).beginPath(),t(e).arc(s.R,s.R,s.decoBand.mid,v(M),v(N)),n(e,t(e).strokeStyle=p%2===0?_:b),n(e,t(e).lineWidth=s.decoBand.width),n(e,t(e).lineCap="butt"),t(e).stroke()}t(e).beginPath(),t(e).arc(s.R,s.R,s.decoNotch.mid,v(0),v(ee)),n(e,t(e).strokeStyle=_),n(e,t(e).lineWidth=s.decoNotch.width),n(e,t(e).lineCap="butt"),t(e).stroke(),t(e).beginPath(),t(e).arc(s.R,s.R,s.decoNotch.mid,v(1-ee),v(0)),n(e,t(e).strokeStyle=b),n(e,t(e).lineWidth=s.decoNotch.width),n(e,t(e).lineCap="butt"),t(e).stroke(),n(e,t(e).globalAlpha=1)}const k=.12;function T(s){return f()?f()===s?1:k:1}function w(){if(!t(e))return;const{s,m:_,h:b}=qe(r());n(e,t(e).fillStyle=a().colors.bg),t(e).fillRect(0,0,i(),i()),m(t(d),"seconds",s,a().colors.secs,T("seconds")),m(t(d),"minutes",_,a().colors.mins,T("minutes")),m(t(d),"hours",b,a().colors.hrs,T("hours")),l(t(d),a().colors.decHi,a().colors.decLo,T("minutes"))}Ie(()=>{A(e,t(c).getContext("2d")),A(d,ie(i())),w()}),J(()=>(t(e),P(i())),()=>{t(e)&&(A(d,ie(i())),w())}),J(()=>(P(r()),P(a()),P(f()),t(e)),()=>{r(),a(),f(),t(e)&&w()}),Te(),oe();var u=Fe();let O;Ne(u,s=>A(c,s),()=>t(c)),z(()=>{j(u,"width",i()),j(u,"height",i()),O=Ee(u,"",O,{width:`${i()??""}px`,height:`${i()??""}px`,"border-radius":"50%"})}),D(h,u),le()}const ne=[{title:"Learn",html:`
        <p>An orbital clock has three rings</p>
        <p>The <b>inside</b> ring shows <b>hours</b>,</p><p>the <b>middle</b> ring show <b>minutes</b> <p>and the <b>outside</b> ring shows <b>seconds</b>.</p>`,highlighted:null,hours:3,mins:6,secs:27},{title:"Learn",html:`
        <p>Each ring contains a solid arc that moves around the ring.</p>
        <p>Time is always read from the clockwise edge of the arc.</p>`,highlighted:null,hours:3,mins:6,secs:27},{title:"Hour Ring",html:"<p>In this example the hour arc is showing three.</p>",highlighted:"hours",hours:3,mins:56,secs:27},{title:"Hour Ring",html:"<p>In this example the hour arc is showing four.</p><p>Unlike the hand on an analogue clock, the hour arc only moves once an hour.</p>",highlighted:"hours",hours:4,mins:5,secs:27},{title:"Minute Ring",html:`
        <p>The minute also moves crisply - exactly once a minute.</p>
        <p>To help precision reading, a band of fixed markers is overlaid on the minute ring.</p>
        `,highlighted:"minutes",hours:4,mins:6,secs:27},{title:"Minute Markers",html:`
        <p>The markers break the minute ring into alternating five minute segments.</p>
        `,highlighted:"minutes",hours:4,mins:6,secs:27},{title:"Minute Markers",html:`
        <p>In the middle of each segment there is a small gap.</p>
        <p>This helps judge minutes in the middle of each segment</p>
        <p>This example is 4:07 (just before the gap)</p>
        `,highlighted:"minutes",hours:4,mins:7,secs:27},{title:"Minute Markers",html:`
        <p>In the middle of each segment there is a small gap.</p>
        <p>This helps judge minutes in the middle of each segment</p>
        <p>This example is 4:08 (just after the gap)</p>
        `,highlighted:"minutes",hours:4,mins:8,secs:27},{title:"Seconds Ring",html:`
        <p>Unlike the hour and minute arc, the seconds arc moves smoothly.</p>
        <p>This makes it less distracting.</p>
        `,highlighted:"seconds",hours:4,mins:6,secs:27},{title:"Example: 11:59:59",html:`
        <p>Although we are only at one second before 12 O'Clock, the hour arc is still clearly 11.</p>
        `,highlighted:null,hours:11,mins:59,secs:59},{title:"Example: 12:00",html:`
        <p>All the arcs are lined up at the top of the clock</p>
        `,highlighted:null,hours:12,mins:0,secs:0},{title:"Example: 12:05",html:`
        <p>The minute arc has moved one whole minute marker segment.</p>
        `,highlighted:null,hours:12,mins:5,secs:0},{title:"Example: 3:23:45",html:`
        <p>The hour arc is three segments around the marker band. </p>
        <p>The minute arc is just after the middle of the 5<sup>th</sup> segment in the marker band.</p>
        `,highlighted:null,hours:3,mins:23,secs:45},{title:"Quiz Time",html:`
        <p>Can you read this time?</p>
        <p>Have a guess before you press next.</p>
        `,highlighted:null,hours:9,mins:0,secs:0},{title:"Quiz Time",html:`
        <p>Can you read this time?</p>
        <p>Answer: <b>9 O'Clock</b></>
        `,highlighted:null,hours:9,mins:0,secs:0},{title:"Quiz Time",html:`
        <p>How about something harder.</p><p>Can you read this time?</p>
        <p>Have a guess before you press next.</p>
        `,highlighted:null,hours:8,mins:47,secs:10},{title:"Quiz Time",html:`
        <p>How about something harder.</p>
        <p>Answer <b>8:47:10</b>.</p>
        `,highlighted:null,hours:8,mins:47,secs:10},{title:"Where now?",html:`
    
        `,highlighted:null,last:!0,hours:8,mins:47,secs:10}];var Je=Q(`<div><p>Now you know the basics the fastest
            way to get familiar is just to leave
            one running on a spare screen.</p> <p>You can <a>See a live clock</a></p> <p>or pick a <a>theme</a> you like better.</p></div>`),Ke=Q("<div></div>"),$e=Q('<h1> </h1> <div class="learn-content svelte-8s3559"><div class="grid-container svelte-8s3559"><div class="clock svelte-8s3559"><!></div> <div class="lesson svelte-8s3559"><!> <div class="nav svelte-8s3559"><button>Prev</button> <button><b>Next …</b></button></div></div></div></div>',1);function dt(h,o){he(o,!1);const r=xe.nord;let a=I(0),i=I(ne[t(a)]),f=I(0);function c(g){A(i,ne[g]),A(f,(t(i).hours*60+t(i).mins)*60+t(i).secs+1)}function e(){t(i).last===!0?Le(U("/")):(A(a,t(a)+1),c(t(a)))}function d(){A(a,t(a)-1),c(t(a))}oe();var m=$e(),l=Re(m),k=R(l,!0);y(l);var T=C(l,2),w=R(T),u=R(w),O=R(u);{let g=Ce(()=>t(i).highlighted??null);Ge(O,{get theme(){return r},size:300,get highlighted(){return t(g)},get secsInDay(){return t(f)}})}y(u);var s=C(u,2),_=R(s);{var b=g=>{var M=Je(),N=C(R(M),2),de=C(R(N));y(N);var Z=C(N,2),ue=C(R(Z));Ae(),y(Z),y(M),z((me,pe)=>{j(de,"href",me),j(ue,"href",pe)},[()=>U("/clock"),()=>U("/")]),D(g,M)},x=g=>{var M=Ke();Oe(M,()=>t(i).html,!0),y(M),D(g,M)};Se(_,g=>{t(i).last===!0?g(b):g(x,-1)})}var p=C(_,2),H=R(p),S=C(H,2);y(p),y(s),y(w),y(T),z(()=>{He(k,t(i).title),H.disabled=t(a)<1,S.disabled=t(i).last===!0}),K("click",H,d),K("click",S,e),D(h,m),le()}export{dt as component};
