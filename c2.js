/* 2 CHRISTMAS BOKEH FAIRY LIGHTS BACKDROP, seamless loop
   Brief: defocused red, gold and green lights rise slowly in three depth layers; two sagging strings of warm bulbs frame the top. Copy space below.
   Palette: red #E5333B, gold #FFC24D, green #2FBF71, cream #FFE9C4 on deep green-black #06140D -> #01070A.
   Hero: bokeh field + light strings. Arc: continuous rise, bulbs twinkle on integer cycles. Premium detail: bokeh discs have brighter rims like real lens bokeh. */
C[2]=()=>{newTL();const R=rng(202),pal=[[229,51,59],[255,194,77],[47,191,113],[255,233,196],[255,120,70],[255,194,77]];
  const cache={};const disc=c=>cache[c.join()]||(cache[c.join()]=(()=>{const k=offscreen(256,256),x=k.getContext('2d'),g=x.createRadialGradient(128,128,0,128,128,124);g.addColorStop(0,rgba(c,.2));g.addColorStop(.78,rgba(c,.3));g.addColorStop(.93,rgba(c,.8));g.addColorStop(1,rgba(c,0));x.fillStyle=g;x.fillRect(0,0,256,256);return k})());
  const B=[];[[150,6,18,.5,1],[80,16,40,.42,1],[24,50,120,.22,2]].forEach(([n,r0,r1,a,m],l)=>{for(let i=0;i<n;i++)B.push({l,x:R()*W,u:R(),r:r0+(r1-r0)*R()**1.6,a:a*(.6+.8*R()),c:pal[(R()*pal.length)|0],m,A:20+R()*80,k:1+((R()*2)|0),ph:R()*TAU,tk:2+((R()*4)|0),tp:R()*TAU})});
  const S=[];[[50,0],[30,1]].forEach(([base,si])=>{for(let i=0;i<17;i++){const t=(i+.5)/17;S.push({si,t,c:pal[(i+si*2)%4],k:3+((i*5+si)%5),ph:R()*TAU})}});
  const sag=(t,si)=>[-40+t*(W+80),(si?160:50)+(si?120:140)*Math.sin(Math.PI*t)];
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#06140d');g.addColorStop(1,'#01070a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';
    g=ctx.createRadialGradient(W*.15,H*.95,0,W*.15,H*.95,800);g.addColorStop(0,`rgba(200,30,40,${.16+.05*Math.sin(th)})`);g.addColorStop(1,'rgba(200,30,40,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    g=ctx.createRadialGradient(W*.88,H*.1,0,W*.88,H*.1,820);g.addColorStop(0,`rgba(30,160,90,${.15+.05*Math.cos(th)})`);g.addColorStop(1,'rgba(30,160,90,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    for(const b of B){const pr=fr(b.u+b.m*u),y=H+b.r-pr*(H+2*b.r*2)+b.r,x=b.x+b.A*Math.sin(th*b.k+b.ph),env=Math.sin(Math.PI*pr)**.6,tw=.6+.4*Math.sin(th*b.tk+b.tp);
      ctx.globalAlpha=b.a*env*tw;ctx.drawImage(disc(b.c),x-b.r,y-b.r,b.r*2,b.r*2)}
    for(const si of[0,1]){ctx.globalAlpha=.55;ctx.strokeStyle='#3a2c12';ctx.lineWidth=2.2;ctx.beginPath();for(let i=0;i<=40;i++){const[x,y]=sag(i/40,si);i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.stroke()}
    for(const s of S){const[x,y]=sag(s.t,s.si),a=.62+.38*Math.sin(th*s.k+s.ph);ctx.globalAlpha=a*.9;ctx.drawImage(spr(s.c,128),x-55,y-55,110,110);ctx.globalAlpha=a;ctx.globalAlpha=a*.6;ctx.drawImage(spr([255,255,255],64),x-6,y-6,12,12)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.6,[2,4]);vignette(.5);grain(.03)}};
