/* 15 MERRY CHRISTMAS GOLD SCRIPT WITH HANGING BAUBLES AND SNOW, text clip
   Brief: five glossy baubles swing on gold threads over deep crimson-black; soft snow falls; MERRY CHRISTMAS is written in a gold script with a left-to-right wipe, then a flourish underline and sparkles.
   Palette: crimson #7A0E1C -> #12030A, bauble red #D6283A, gold #F4C85A / #C88A1C, pine #1E6B45, snow #FFFFFF. Hero: the script. Arc: baubles drop in 0-2.5 s, text writes 2.5-5.5 s, hold with swing and snow, fade at the end.
   Premium detail: baubles have rim light, specular and soft reflected colour; the script is masked by a feathered wipe, not faded. */
C[15]=()=>{newTL();const R=rng(1515),D=DUR/1000,g={f:0,w:0,u:0,sp:0};
  A(g,{f:0},{f:1},0,.6,'power2.out');A(g,{f:1},{f:0},D-.9,.9,'power1.in');A(g,{w:0},{w:1},2.6,3,'power2.inOut');A(g,{u:0},{u:1},5.4,1.1,'power3.out');A(g,{sp:0},{sp:1},4.5,2.5,'power2.out');
  const BB=[{x:250,len:300,r:62,c:[214,40,58],ph:0},{x:470,len:170,r:48,c:[244,200,90],ph:1.3},{x:960,len:120,r:44,c:[30,107,69],ph:2.1},{x:1450,len:200,r:50,c:[244,200,90],ph:.7},{x:1670,len:340,r:66,c:[214,40,58],ph:2.8}];
  BB.forEach((b,i)=>{b.d={y:-b.len-120};A(b.d,{y:-b.len-150},{y:0},.2+i*.22,1.3,'bounce.out')});
  const Sn=Array.from({length:260},()=>({x:R()*W,u:R(),r:1+R()*2.6,m:1+((R()*2)|0),A:20+R()*50,ph:R()*TAU,a:.3+R()*.6}));
  const Tt=offscreen(W*S,H*S),tx=Tt.getContext('2d');
  const bauble=(x,y,r,c,ang)=>{ctx.save();ctx.translate(x,y);ctx.rotate(ang);const gr=ctx.createRadialGradient(-r*.3,r*.35,r*.1,0,r*.5,r*1.1);gr.addColorStop(0,rgba(mixc(c,[255,255,255],.35),1));gr.addColorStop(.5,rgba(c,1));gr.addColorStop(1,rgba(mixc(c,[0,0,0],.7),1));
    ctx.fillStyle=gr;ctx.beginPath();ctx.arc(0,r,r,0,TAU);ctx.fill();ctx.strokeStyle=rgba(mixc(c,[255,255,255],.5),.5);ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,r,r-2,Math.PI*.15,Math.PI*.85);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.85)';ctx.beginPath();ctx.ellipse(-r*.35,r*.55,r*.16,r*.1,-.6,0,TAU);ctx.fill();ctx.fillStyle='#e8b44a';ctx.fillRect(-r*.2,-r*.12,r*.4,r*.2);ctx.fillStyle='#a86d12';ctx.fillRect(-r*.2,r*.04,r*.4,r*.04);ctx.restore()};
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let bg=ctx.createRadialGradient(W/2,H*.55,0,W/2,H*.55,H*1.1);bg.addColorStop(0,'#7a0e1c');bg.addColorStop(.6,'#2a0610');bg.addColorStop(1,'#12030a');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);ctx.globalAlpha=g.f;
    ctx.globalCompositeOperation='lighter';ctx.globalAlpha=.7*g.f;ctx.fillStyle='rgba(255,190,90,.06)';ctx.fillRect(0,0,W,H);
    for(const s of Sn){const y=-10+fr(s.u+s.m*u)*(H+20),x=s.x+s.A*Math.sin(th*2+s.ph);ctx.globalAlpha=g.f*s.a*.8;ctx.drawImage(spr([255,240,240],32),x-s.r*2,y-s.r*2,s.r*4,s.r*4)}
    ctx.globalCompositeOperation='source-over';
    for(const b of BB){const ang=.09*g.sp*Math.sin(ms/1000*1.1+b.ph)+.06*Math.sin(th*2+b.ph),y=b.len+b.d.y;ctx.globalAlpha=g.f;ctx.strokeStyle='#c9a24a';ctx.lineWidth=2.4;ctx.beginPath();ctx.moveTo(b.x,-10);const ex=b.x+Math.sin(ang)*(y),ey=Math.cos(ang)*y;ctx.lineTo(ex,ey);ctx.stroke();
      ctx.save();ctx.translate(b.x,0);bauble(Math.sin(ang)*y,Math.cos(ang)*y,b.r,b.c,ang);ctx.restore()}
    tx.setTransform(S,0,0,S,0,0);tx.clearRect(0,0,W,H);const sv=ctx;ctx=tx;txt('Merry Christmas',W/2,H*.62,{f:'Great Vibes',w:400,size:250,fill:(()=>{const gr=tx.createLinearGradient(0,-110,0,110);gr.addColorStop(0,'#fff0c0');gr.addColorStop(.5,'#f0c05a');gr.addColorStop(1,'#b87a1a');return gr})(),glow:[['rgba(255,170,50,.45)',28]]});
    tx.globalCompositeOperation='destination-in';const x0=lerp(W*.14,W*.92,g.w),p0=clamp((x0-150)/W,0,1),p1=clamp((x0+10)/W,p0,1),mg=tx.createLinearGradient(0,0,W,0);mg.addColorStop(0,'#000');mg.addColorStop(p0,'#000');mg.addColorStop(p1,'rgba(0,0,0,0)');mg.addColorStop(1,'rgba(0,0,0,0)');tx.fillStyle=mg;tx.fillRect(0,0,W,H);tx.globalCompositeOperation='source-over';ctx=sv;
    ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=g.f;ctx.drawImage(Tt,0,0);ctx.restore();ctx.setTransform(S,0,0,S,0,0);
    ctx.globalAlpha=g.f*g.u;ctx.strokeStyle='#e8b44a';ctx.lineWidth=3;ctx.beginPath();const ux=W/2,uw=420*g.u;ctx.moveTo(ux-uw,H*.62+160);ctx.quadraticCurveTo(ux,H*.62+190,ux+uw,H*.62+160);ctx.stroke();
    ctx.globalCompositeOperation='lighter';for(let i=0;i<14;i++){const sx=W*.2+i*(W*.6/13),sy=H*.62-80+((i*37)%160),tw=Math.max(0,Math.sin(th*(2+i%3)+i*1.7))**8;ctx.globalAlpha=g.f*g.w*tw;flare(sx,sy,26+(i%4)*8,tw,'#ffe9b0')}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.3,[2,4]);vignette(.5);grain(.03)}};
