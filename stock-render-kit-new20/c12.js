/* 12 WARM ANALOG FILM LIGHT LEAKS OVERLAY ON BLACK, seamless loop
   Brief: seven soft amber, red, rose and gold light blooms enter from the frame edges and pulse, with slanted light bands sliding in; the centre stays black. Made for screen or add blend over any footage.
   Palette: #FF6E28 #FF3C5A #FFBE50 #FF5AA0 #FF8C3C #F04632 #FFC878. Hero: the edge blooms. Arc: slow wander and pulse on integer cycles, fast flicker at 20-40 cycles.
   Premium detail: pure coloured falloff (no white core) so it blends like real leaks, plus faint slanted bands. */
C[12]=()=>{newTL();const R=rng(1212),cs=[[255,110,40],[255,60,90],[255,190,80],[255,90,160],[255,140,60],[240,70,50],[255,200,120]];
  const L=cs.map((c,i)=>({c,x:i%2?W*(1.02+.04*R()):-W*.02-W*.04*R(),y:R()*H,r:520+R()*620,A:160+R()*200,k:1+(i%3),ph:R()*TAU,a:.5+R()*.4,fk:20+((R()*20)|0)}));
  const bands=[0,1,2,3,4].map(i=>({x:i%2?W*.93:W*.07,w:150+R()*160,c:cs[(i*2)%7],k:1+(i%2),ph:R()*TAU,a:.18+R()*.14,ang:.22*(i%2?-1:1)}));
  draw=()=>{clear();const ms=now(),th=LOOP(ms);ctx.globalCompositeOperation='lighter';
    for(const l of L){const x=l.x+l.A*Math.sin(th*l.k+l.ph)*(l.x<0?1:-1)*.5,y=l.y+l.A*.6*Math.cos(th*l.k+l.ph*1.7),a=l.a*(.55+.45*Math.sin(th*(l.k+1)+l.ph*2))*(.88+.12*Math.sin(th*l.fk+l.ph));
      const g=ctx.createRadialGradient(x,y,0,x,y,l.r);g.addColorStop(0,rgba(l.c,.85*a));g.addColorStop(.45,rgba(l.c,.3*a));g.addColorStop(1,rgba(l.c,0));ctx.globalAlpha=1;ctx.fillStyle=g;ctx.fillRect(x-l.r,y-l.r,l.r*2,l.r*2)}
    for(const b of bands){const a=b.a*(.4+.6*(.5+.5*Math.sin(th*b.k+b.ph)));const x=b.x+80*Math.sin(th*b.k+b.ph+1);ctx.save();ctx.translate(x,H/2);ctx.rotate(b.ang);const g=ctx.createLinearGradient(-b.w,0,b.w,0);g.addColorStop(0,rgba(b.c,0));g.addColorStop(.5,rgba(b.c,a));g.addColorStop(1,rgba(b.c,0));ctx.fillStyle=g;ctx.fillRect(-b.w,-H,b.w*2,H*2);ctx.restore()}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.35,[2,4]);grain(.025)}};
