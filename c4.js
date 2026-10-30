/* 4 AURORA CURTAINS OVER A STARRY RIDGE, seamless loop
   Brief: three layered curtains of green and violet light ripple above a pine ridge under a field of twinkling stars.
   Palette: aurora green #3CFFA0, teal #3CE6AA, violet #9658FF, sky #020612 -> #07102A, ridge black.
   Hero: the brightest middle curtain. Arc: curtains breathe on a 1x and 2x noise cycle, stars twinkle on integer cycles. Premium detail: vertical ray structure and a brighter lower edge as in real aurora. */
C[4]=()=>{newTL();const R=rng(404);
  const stars=Array.from({length:430},()=>({x:R()*W,y:R()*H*.78,s:R()<.92?1:2.2,ph:R()*TAU,k:1+((R()*4)|0),a:.25+R()*.75}));
  const st=offscreen(W*S,H*S),sx=st.getContext('2d');sx.scale(S,S);
  let g=sx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#020612');g.addColorStop(.7,'#07102a');g.addColorStop(1,'#0b1c3a');sx.fillStyle=g;sx.fillRect(0,0,W,H);
  sx.fillStyle='#010206';sx.beginPath();sx.moveTo(0,H);for(let x=0;x<=W;x+=6)sx.lineTo(x,H*.86-80*(.5+.5*fbm(x*.0035,5,4))-20*Math.max(0,fbm(x*.01,9,2)));sx.lineTo(W,H);sx.fill();
  for(let x=-10;x<W+10;x+=14){const yb=H*.86-80*(.5+.5*fbm(x*.0035,5,4))-20*Math.max(0,fbm(x*.01,9,2))+6,h=30+R()*70;sx.beginPath();sx.moveTo(x-h*.17,yb);sx.lineTo(x,yb-h);sx.lineTo(x+h*.17,yb);sx.fill()}
  const lay=[{y:.5,h:.34,c0:[130,80,255],c1:[60,240,150],a:.14,s:5},{y:.58,h:.4,c0:[150,88,255],c1:[60,255,160],a:.22,s:9},{y:.64,h:.3,c0:[120,110,255],c1:[70,255,150],a:.17,s:14}];
  draw=()=>{clear();const ms=now(),th=LOOP(ms);ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(st,0,0);ctx.restore();ctx.setTransform(S,0,0,S,0,0);
    ctx.globalCompositeOperation='lighter';
    for(const s of stars){ctx.globalAlpha=s.a*(.35+.65*(.5+.5*Math.sin(th*s.k+s.ph)));ctx.fillStyle='#fff';ctx.fillRect(s.x,s.y,s.s,s.s)}
    lay.forEach((L,li)=>{for(let x=-10;x<W+10;x+=5){const base=H*L.y+90*lnoise(x*.0011+li*5,li*2.3,th,1)+ (x-W/2)*.04,
        hh=H*L.h*(.4+.6*(.5+.5*lnoise(x*.003+9+li*4,4,th*2,1)))**1.2,
        it=sm(.05,.85,.55+.9*lnoise(x*.0016+li*3,17,th,1))*(.75+.25*lnoise(x*.05,li,th*3,1)),a=L.a*it;
        const gr=ctx.createLinearGradient(0,base+70,0,base-hh),f=70/(hh+70);gr.addColorStop(0,rgba(L.c1,0));gr.addColorStop(f*.9,rgba(L.c1,a*1.5));gr.addColorStop(f+(1-f)*.4,rgba(mixc(L.c1,L.c0,.4),a*.55));gr.addColorStop(1,rgba(L.c0,0));
        ctx.globalAlpha=1;ctx.fillStyle=gr;ctx.fillRect(x,base-hh,L.s,hh+70)}});
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(1,[2,4]);vignette(.5);grain(.03)}};
