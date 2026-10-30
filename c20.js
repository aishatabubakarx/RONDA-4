/* 20 ABSTRACT NEURAL NETWORK SIGNAL PULSES IN 3D, seamless loop (no robots, no logos)
   Brief: five layers of glowing nodes joined by hundreds of fine links; cyan signal pulses travel layer to layer and each arrival lights its node; the whole net rotates gently in perspective.
   Palette: violet #8C64FF links, cyan #5AE6FF pulses, white cores on indigo #0B0A28 -> #010008. Hero: the node net. Arc: five pulse waves per clip on integer cycles, yaw sway one cycle.
   Premium detail: pulses have tails, nodes decay after arrival, background constellation drifts at a different depth. */
C[20]=()=>{newTL();const R=rng(2020),lay=[4,6,7,6,3],F=1300,N=[],Ls=[];
  lay.forEach((n,l)=>{for(let i=0;i<n;i++)N.push({l,x:-740+l*370,y:(i-(n-1)/2)*(700/Math.max(n,5))+(R()-.5)*50,z:(R()-.5)*320,r:9+R()*5,ph:R()*TAU,k:1+((R()*3)|0)})});
  for(let a=0;a<N.length;a++)for(let b=0;b<N.length;b++)if(N[b].l===N[a].l+1)Ls.push({a,b,off:N[a].l*.15+R()*.06,k:5,p:R()<.4});
  const Dst=Array.from({length:150},()=>({x:R()*W,y:R()*H,z:R(),ph:R()*TAU,k:1+((R()*3)|0)}));
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let bg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);bg.addColorStop(0,'#0b0a28');bg.addColorStop(1,'#010008');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);ctx.globalCompositeOperation='lighter';
    for(const d of Dst){ctx.globalAlpha=.12+.3*d.z*(.5+.5*Math.sin(th*d.k+d.ph));const x=(d.x+30*Math.sin(th)*d.z+W)%W;ctx.fillStyle='#b8a8ff';ctx.fillRect(x,d.y,1+d.z*1.6,1+d.z*1.6)}
    const ya=.5*Math.sin(th),pa=.12*Math.sin(th*2),cy=Math.cos(ya),sy=Math.sin(ya),cp=Math.cos(pa),sp=Math.sin(pa),P=N.map(n=>{let x=n.x*cy+n.z*sy,z=-n.x*sy+n.z*cy,y=n.y*cp-z*sp;z=n.y*sp+z*cp;const s=1.15*F/(F+z+200);return{x:W/2+x*s,y:H/2+y*s,s,z}});
    const act=new Float32Array(N.length);
    for(const L of Ls){if(!L.p)continue;const ph=fr(u*L.k+L.off);if(ph>.7)act[L.b]=Math.max(act[L.b],Math.exp(-(ph-.7)*14));if(ph<.08)act[L.a]=Math.max(act[L.a],(1-ph/.08)*.5)}
    ctx.lineWidth=1.2;for(const L of Ls){const a=P[L.a],b=P[L.b];ctx.globalAlpha=.1+.1*Math.min(a.s,b.s);ctx.strokeStyle='#8c64ff';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    for(const L of Ls){if(!L.p)continue;const ph=fr(u*L.k+L.off);if(ph>.7)continue;const q=ez('power1.inOut',ph/.7),a=P[L.a],b=P[L.b];for(let j=0;j<6;j++){const qq=Math.max(0,q-j*.012),x=lerp(a.x,b.x,qq),y=lerp(a.y,b.y,qq),sz=(1-j/7)*22*(a.s+b.s)/2;ctx.globalAlpha=(1-j/7)*.85;ctx.drawImage(spr([90,230,255],64),x-sz/2,y-sz/2,sz,sz)}}
    N.forEach((n,i)=>{const p=P[i],ac=act[i],r=n.r*p.s*2.2,pu=.5+.5*Math.sin(th*n.k+n.ph);ctx.globalAlpha=.35+.25*pu+.6*ac;ctx.drawImage(spr(ac>.25?[90,230,255]:[140,100,255],128),p.x-r*4,p.y-r*4,r*8,r*8);ctx.globalAlpha=.9;ctx.drawImage(spr([255,255,255],64),p.x-r*.9,p.y-r*.9,r*1.8,r*1.8)});
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.6,[2,4]);vignette(.5);grain(.03)}};
