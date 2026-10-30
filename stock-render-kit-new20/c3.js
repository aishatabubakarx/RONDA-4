/* 3 WINTER NIGHT SNOWFALL BACKDROP (Christmas / New Year), seamless loop
   Brief: three depth layers of snow fall over a deep blue night with a moon halo and warm distant bokeh lights; a few six-armed crystals turn in the foreground. Copy space everywhere.
   Palette: night blue #0C2342 -> #030813, snow #DCEBFF, moon #A0C8FF, warm lights #FFC878.
   Hero: snowfall. Arc: continuous fall (far 1, mid 2, near 4 screens per clip), sway on integer cycles. Premium detail: noise fog drifting near the ground and crystalline foreground flakes. */
C[3]=()=>{newTL();const R=rng(303);
  const lay=(n,r0,r1,m,a,A)=>Array.from({length:n},()=>({x:R()*W,u:R(),r:r0+(r1-r0)*R(),m,a:a*(.6+.8*R()),A:A*(.4+R()),k:1+((R()*2)|0),ph:R()*TAU}));
  const far=lay(520,.7,1.6,1,.55,30),mid=lay(240,1.6,3.4,2,.8,70),near=lay(46,7,18,4,.38,140);
  const cr=Array.from({length:12},()=>({x:R()*W,u:R(),r:20+R()*26,m:3,A:80+R()*80,k:1,ph:R()*TAU,rk:(R()<.5?-1:1),a:.5+R()*.4}));
  const lights=Array.from({length:48},()=>({x:R()*W,y:H*(.84+.14*R()),r:3+R()*8,ph:R()*TAU,k:1+((R()*4)|0)}));
  const fg=offscreen(96,54),fx=fg.getContext('2d'),fi=fx.createImageData(96,54);
  const flake=(x,y,r,rot,a)=>{ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.strokeStyle='#dcebff';ctx.globalAlpha=a;ctx.lineWidth=1.8;ctx.lineCap='round';ctx.beginPath();
    for(let i=0;i<6;i++){ctx.save();ctx.rotate(i*TAU/6);ctx.moveTo(0,0);ctx.lineTo(r,0);for(const q of[.45,.75]){ctx.moveTo(r*q,0);ctx.lineTo(r*q+r*.2,r*.2);ctx.moveTo(r*q,0);ctx.lineTo(r*q+r*.2,-r*.2)}ctx.restore()}ctx.stroke();ctx.restore()};
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0c2342');g.addColorStop(.55,'#08162b');g.addColorStop(1,'#030813');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';g=ctx.createRadialGradient(W*.78,H*.2,0,W*.78,H*.2,560);g.addColorStop(0,`rgba(160,200,255,${.2+.03*Math.sin(th)})`);g.addColorStop(1,'rgba(160,200,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    for(const l of lights){ctx.globalAlpha=.16+.12*Math.sin(th*l.k+l.ph);ctx.drawImage(spr([255,200,120],64),l.x-l.r*3,l.y-l.r*3,l.r*6,l.r*6)}
    const sn=spr([220,235,255],64),drawL=(L,f)=>{for(const p of L){const pr=fr(p.u+p.m*u),y=-p.r*3+pr*(H+p.r*6),x=p.x+p.A*Math.sin(th*p.k+p.ph);ctx.globalAlpha=p.a;f(x,y,p)}};
    drawL(far,(x,y,p)=>{ctx.fillStyle='#dcebff';ctx.fillRect(x,y,p.r,p.r)});
    drawL(mid,(x,y,p)=>ctx.drawImage(sn,x-p.r*2,y-p.r*2,p.r*4,p.r*4));
    for(let j=0;j<54;j++)for(let i=0;i<96;i++){const v=clamp(.45+.5*lnoise(i*.025,j*.035,th*1,1.2),0,1)*.5*(j/54)**1.8,o=(j*96+i)*4;fi.data[o]=120;fi.data[o+1]=160;fi.data[o+2]=220;fi.data[o+3]=255*v}
    fx.putImageData(fi,0,0);ctx.globalAlpha=.5;ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(fg,0,H*.3,W,H*.7);
    drawL(near,(x,y,p)=>ctx.drawImage(sn,x-p.r*2.4,y-p.r*2.4,p.r*4.8,p.r*4.8));
    for(const c of cr){const pr=fr(c.u+c.m*u),y=-80+pr*(H+160),x=c.x+c.A*Math.sin(th*c.k+c.ph);ctx.globalAlpha=1;flake(x,y,c.r,c.ph+th*2*c.rk,c.a)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.7,[2,4]);vignette(.5);grain(.03)}};
