/* 6 PAPER-CUT LAYERED SUNSET WAVES, seamless loop
   Brief: seven layers of cut paper in coral, rose and plum roll in slow waves beneath a glowing sun, each casting a soft shadow on the layer behind.
   Palette: #F7A072 #EE6C6A #D4506B #A93A6E #7A2C73 #4E2273 #2A1650, sun #FFD27A, sky #2A1B4D -> #FF9B66.
   Hero: the layered ridges. Arc: each layer waves on its own integer cycle; sun breathes; gold motes drift. Premium detail: stacked paper shadows and a thin lit top edge on every layer. */
C[6]=()=>{newTL();const R=rng(606),cols=['#F7A072','#EE6C6A','#D4506B','#A93A6E','#7A2C73','#4E2273','#2A1650'];
  const L=cols.map((c,i)=>({c,y:H*(.5+.078*i),A:20+i*6,k1:(1.2+i*.33)*TAU/W*1.3,k2:(2.4+i*.4)*TAU/W,m:(i%2?1:-1)*(1+(i%2)),ph:R()*TAU}));
  const M=Array.from({length:80},()=>({x:R()*W,y:R()*H*.9,s:1+R()*2.2,ph:R()*TAU,k:1+((R()*3)|0),m:1+((R()*2)|0),A:20+R()*60}));
  const wy=(l,x,th)=>l.y+l.A*(Math.sin(l.k1*x+th*l.m+l.ph)+.45*Math.sin(l.k2*x-th*2*Math.sign(l.m)+l.ph*2));
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let g=ctx.createLinearGradient(0,0,0,H*.62);g.addColorStop(0,'#2a1b4d');g.addColorStop(.5,'#8a3a72');g.addColorStop(1,'#ff9b66');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';const sr=150*(1+.03*Math.sin(th));g=ctx.createRadialGradient(W/2,H*.44,0,W/2,H*.44,sr*4);g.addColorStop(0,'rgba(255,214,130,.55)');g.addColorStop(.25,'rgba(255,150,100,.22)');g.addColorStop(1,'rgba(255,140,90,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='source-over';ctx.fillStyle='#ffd88a';ctx.beginPath();ctx.arc(W/2,H*.44,sr,0,TAU);ctx.fill();
    L.forEach((l,i)=>{const pts=[];for(let x=0;x<=W+6;x+=6)pts.push([x,wy(l,x,th)]);
      const path=(dy)=>{ctx.beginPath();ctx.moveTo(0,H+10);for(const[x,y]of pts)ctx.lineTo(x,y+dy);ctx.lineTo(W+6,H+10);ctx.closePath()};
      for(const[j,a]of[[22,.06],[14,.08],[7,.1]]){path(-j);ctx.fillStyle=`rgba(30,5,50,${a})`;ctx.fill()}
      path(0);ctx.fillStyle=l.c;ctx.fill();
      const gg=ctx.createLinearGradient(0,l.y-l.A,0,l.y+170);gg.addColorStop(0,'rgba(255,200,160,.16)');gg.addColorStop(1,'rgba(255,200,160,0)');path(0);ctx.fillStyle=gg;ctx.fill();
      ctx.beginPath();pts.forEach(([x,y],k)=>k?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.strokeStyle='rgba(255,235,210,.32)';ctx.lineWidth=2;ctx.stroke()});
    ctx.globalCompositeOperation='lighter';for(const m of M){ctx.globalAlpha=.25+.5*(.5+.5*Math.sin(th*m.k+m.ph));const x=m.x+m.A*Math.sin(th*m.k+m.ph),y=((m.y/H-u*m.m*.5)%1+1)%1*H;ctx.drawImage(spr([255,210,140],64),x-m.s*4,y-m.s*4,m.s*8,m.s*8)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.06,[2,4]);vignette(.4);grain(.03)}};
