/* 9 NEW YEAR FIREWORKS SEQUENCE ON BLACK (overlay, nine bursts and a triple finale)
   Brief: rockets climb, burst into gold, rose, ice-blue and mint sparks that trail, drag, fall and glitter; the last three bursts fire together. Pure black behind, ready for screen blend.
   Palette: gold #FFC857, ember #FF783C, rose #FF5A82, ice #D2E6FF, blue #5AAAFF, mint #78FFC8. Hero: the bursts. Arc: bursts every 1.4 s building to the finale at 72-77% of the clip, hold, fade.
   Premium detail: analytic drag + gravity paths, five-step particle trails, late-life glitter, and a coloured flash at each burst. */
C[9]=()=>{newTL();const R=rng(909),D=DUR/1000;
  const pal=[[[255,200,87],[255,120,60]],[[255,90,130],[255,200,220]],[[210,230,255],[90,170,255]],[[120,255,200],[255,255,255]],[[255,215,120],[255,255,230]]];
  const ts=[.1,.19,.29,.4,.5,.6,.72,.745,.77],fin=[.28,.5,.72];
  const BU=ts.map((f,i)=>{const pl=pal[i%5],N=i>=6?260:340,kind=i%3;return{t0:f*D,cx:i>=6?W*fin[i-6]:W*(.14+.72*R()),cy:i>=6?H*.3:H*(.2+.3*R()),pl,N,kind,v:(i>=6?470:560)+R()*110,k:kind==2?1.1:1.6,g:kind==2?130:70,rx:(R()-.5)*200,
    P:Array.from({length:N},()=>({a:R()*TAU,sp:kind==1?(R()<.5?.6:1):.82+.18*R(),z:Math.sqrt(1-(R()*2-1)**2),c:R()<.6?0:1,ph:R()*TAU,tw:R()}))}});
  draw=()=>{clear();const t=now()/1000,fade=1-sm(D-.9,D,t);ctx.globalCompositeOperation='lighter';
    for(const b of BU){const tt=t-b.t0,rt=(t-(b.t0-.9))/.9;
      if(rt>0&&rt<1)for(let j=0;j<14;j++){const q=clamp(rt-j*.02,0,1),e=ez('power2.out',q),x=lerp(b.cx+b.rx,b.cx,e),y=lerp(H+20,b.cy,e);ctx.globalAlpha=fade*(1-j/14)*.9;ctx.drawImage(spr([255,220,150],32),x-9,y-9,18,18)}
      if(tt<0||tt>3.2)continue;
      if(tt<.45){const r=620*ez('expo.out',tt/.45);ctx.globalAlpha=fade*(1-tt/.45)*.55;ctx.drawImage(spr(b.pl[0],256),b.cx-r,b.cy-r,r*2,r*2);ctx.globalAlpha=fade*(1-tt/.45)*.5;ctx.drawImage(spr([255,255,255],128),b.cx-r*.3,b.cy-r*.3,r*.6,r*.6)}
      for(const p of b.P){const col=b.pl[p.c],v=b.v*p.sp;for(let j=0;j<8;j++){const q=tt-j*.03;if(q<0)continue;const e=(1-Math.exp(-b.k*q))/b.k,x=b.cx+Math.cos(p.a)*p.z*v*e,y=b.cy+Math.sin(p.a)*p.z*v*e+.5*b.g*q*q;
          let al=Math.pow(Math.max(0,1-q/3),1.4)*(1-j*.11);if(q>1.3)al*=(p.tw>.45?.35+.65*Math.max(0,Math.sin(q*38+p.ph)):.8);
          ctx.globalAlpha=al*fade*(j?.6:1);const s=j?6:11;ctx.drawImage(spr(col,32),x-s,y-s,s*2,s*2)}}}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.9,[2,4]);grain(.02)}};
