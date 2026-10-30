/* 13 GREEN RADAR SONAR SWEEP WITH BLIPS, seamless loop
   Brief: a circular radar scope with range rings, bearing ticks and cardinal letters; a sweep wedge turns twice per clip and nine contacts light up and fade as it passes, with a ping ring.
   Palette: phosphor green #2BFFA0 / #0FBF75 on #01140D. Hero: the rotating sweep. Arc: two revolutions per loop. Premium detail: conic-gradient sweep tail, per-blip decay tied to sweep angle, faint grid and scan glow. */
C[13]=()=>{newTL();const R=rng(1313),cx=W/2,cy=H/2,rr=440,G=[43,255,160];
  const bl=Array.from({length:9},(_,i)=>({a:R()*TAU,d:.2+.75*R(),s:8+R()*6}));
  draw=()=>{clear();const ms=now(),th=LOOP(ms),sw=th*2;let g=ctx.createRadialGradient(cx,cy,0,cx,cy,H*.9);g.addColorStop(0,'#04251a');g.addColorStop(1,'#01140d');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(43,255,160,.06)';ctx.lineWidth=1;for(let x=0;x<=W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}for(let y=0;y<=H;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
    ctx.globalCompositeOperation='lighter';ctx.lineWidth=2;
    for(let i=1;i<=4;i++){ctx.strokeStyle=rgba(G,i==4?.7:.35);ctx.beginPath();ctx.arc(cx,cy,rr*i/4,0,TAU);ctx.stroke()}
    ctx.strokeStyle=rgba(G,.3);ctx.beginPath();ctx.moveTo(cx-rr-30,cy);ctx.lineTo(cx+rr+30,cy);ctx.moveTo(cx,cy-rr-30);ctx.lineTo(cx,cy+rr+30);ctx.stroke();
    for(let i=0;i<72;i++){const a=i/72*TAU,l=i%6?10:22;ctx.strokeStyle=rgba(G,i%6?.35:.75);ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr);ctx.lineTo(cx+Math.cos(a)*(rr+l),cy+Math.sin(a)*(rr+l));ctx.stroke()}
    [['N',0,-1],['E',1,0],['S',0,1],['W',-1,0]].forEach(([c,dx,dy])=>txt(c,cx+dx*(rr+62),cy+dy*(rr+62),{f:'JetBrains Mono',w:700,size:30,fill:rgba(G,.85)}));
    const cg=ctx.createConicGradient(sw-Math.PI/2-1.2,cx,cy);cg.addColorStop(0,rgba(G,0));cg.addColorStop(.19,rgba(G,.3));cg.addColorStop(.1909,rgba(G,0));cg.addColorStop(1,rgba(G,0));
    ctx.fillStyle=cg;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,rr,sw-Math.PI/2-1.2,sw-Math.PI/2);ctx.closePath();ctx.fill();
    ctx.strokeStyle=rgba([200,255,230],.95);ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(sw-Math.PI/2)*rr,cy+Math.sin(sw-Math.PI/2)*rr);ctx.stroke();
    for(const b of bl){const ba=b.a,age=((sw-Math.PI/2-ba)%TAU+TAU)%TAU/TAU,al=Math.exp(-age*4.2),x=cx+Math.cos(ba)*rr*b.d,y=cy+Math.sin(ba)*rr*b.d;
      ctx.globalAlpha=al;ctx.drawImage(spr([120,255,200],64),x-b.s*3,y-b.s*3,b.s*6,b.s*6);if(age<.08){ctx.strokeStyle=rgba(G,1);ctx.lineWidth=2;ctx.globalAlpha=1-age/.08;ctx.beginPath();ctx.arc(x,y,b.s*2+age*300,0,TAU);ctx.stroke()}}
    ctx.globalAlpha=.9;ctx.drawImage(spr(G,64),cx-14,cy-14,28,28);
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.7,[2,4]);vignette(.5);grain(.03)}};
