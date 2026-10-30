/* 16 RAMADAN KAREEM CRESCENT AND SWAYING LANTERNS, text clip (respectful, Arabic set as one whole string)
   Brief: a gold crescent and stars glow over deep indigo; five ornate lanterns lower into place and sway with warm flickering light; Arabic then English greeting appear, with soft light motes.
   Palette: indigo #0A0F2E -> #02030C, gold #F4C85A / #C88A1C, lantern glow #FFB347, cream #FFF1CF. Hero: lanterns + greeting. Arc: crescent and stars 0-1.5 s, lanterns lower 0.8-3 s, Arabic 3 s, English 4 s, hold with sway, fade.
   Premium detail: lantern panels glow independently, crescent is a cached cut-out with a wide soft halo. */
C[16]=()=>{newTL();const R=rng(1616),D=DUR/1000,g={f:0,c:0,a:0,e:0};
  A(g,{f:0},{f:1},0,.7,'power2.out');A(g,{f:1},{f:0},D-.9,.9,'power1.in');A(g,{c:0},{c:1},.2,1.6,'power2.out');A(g,{a:0},{a:1},3,1.4,'power2.out');A(g,{e:0},{e:1},4,1.4,'power2.out');
  const Ln=[{x:300,len:330,s:.9,ph:0},{x:560,len:200,s:.72,ph:1.2},{x:1360,len:230,s:.75,ph:2.4},{x:1620,len:360,s:.95,ph:.6}].map((l,i)=>{l.d={y:-500};A(l.d,{y:-500},{y:0},.8+i*.3,1.8,'bounce.out');return l});
  const St=Array.from({length:220},()=>({x:R()*W,y:R()*H*.8,s:1+R()*2,ph:R()*TAU,k:1+((R()*4)|0),a:.3+R()*.7}));
  const Mo=Array.from({length:70},()=>({x:R()*W,u:R(),s:1.5+R()*2,m:1+((R()*2)|0),A:20+R()*50,ph:R()*TAU}));
  const cr=offscreen(1200,1200),cx2=cr.getContext('2d');{const gr=cx2.createLinearGradient(200,200,1000,1000);gr.addColorStop(0,'#fff3d1');gr.addColorStop(.5,'#f4c85a');gr.addColorStop(1,'#c88a1c');cx2.fillStyle=gr;cx2.beginPath();cx2.arc(600,600,420,0,TAU);cx2.fill();cx2.globalCompositeOperation='destination-out';cx2.beginPath();cx2.arc(740,540,370,0,TAU);cx2.fill()}
  const lantern=(s,fl,th,ph)=>{ctx.save();ctx.scale(s,s);const gl=ctx.createRadialGradient(0,150,0,0,150,230);gl.addColorStop(0,`rgba(255,179,71,${.5*fl})`);gl.addColorStop(1,'rgba(255,179,71,0)');ctx.globalCompositeOperation='lighter';ctx.fillStyle=gl;ctx.fillRect(-240,-90,480,480);ctx.globalCompositeOperation='source-over';
    ctx.strokeStyle='#c88a1c';ctx.lineWidth=5;ctx.fillStyle='#8a5a12';ctx.beginPath();ctx.moveTo(0,-8);ctx.lineTo(10,12);ctx.lineTo(-10,12);ctx.closePath();ctx.fill();
    ctx.fillStyle='#d9a23a';ctx.beginPath();ctx.moveTo(-70,70);ctx.quadraticCurveTo(0,-30,70,70);ctx.closePath();ctx.fill();ctx.stroke();
    ctx.fillStyle='#b5801f';ctx.fillRect(-82,70,164,18);
    const bw=[-72,72],pw=[-72,-24,24,72];for(let i=0;i<3;i++){const x0=pw[i],x1=pw[i+1],f=.55+.45*Math.sin(th*(3+i)+ph+i);ctx.fillStyle=`rgba(255,${170+60*f|0},${60+40*f|0},${.55+.4*f})`;ctx.beginPath();ctx.moveTo(x0+4,92);ctx.lineTo(x0+4,200);ctx.quadraticCurveTo((x0+x1)/2,172,x1-4,200);ctx.lineTo(x1-4,92);ctx.closePath();ctx.fill()}
    ctx.strokeStyle='#e0aa40';ctx.lineWidth=6;for(const x of pw){ctx.beginPath();ctx.moveTo(x,88);ctx.lineTo(x*.82,226);ctx.stroke()}
    ctx.fillStyle='#b5801f';ctx.fillRect(-66,226,132,16);ctx.fillStyle='#d9a23a';ctx.beginPath();ctx.moveTo(-60,242);ctx.lineTo(60,242);ctx.lineTo(0,300);ctx.closePath();ctx.fill();ctx.strokeStyle='#c88a1c';ctx.lineWidth=3;ctx.stroke();ctx.restore()};
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#0a0f2e');bg.addColorStop(1,'#02030c');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);ctx.globalAlpha=g.f;
    ctx.globalCompositeOperation='lighter';for(const s of St){ctx.globalAlpha=g.f*s.a*(.3+.7*(.5+.5*Math.sin(th*s.k+s.ph)));ctx.fillStyle='#fff';ctx.fillRect(s.x,s.y,s.s,s.s)}
    const mx=W*.5,my=H*.2,pc=g.c;ctx.globalAlpha=g.f*pc*.22;ctx.drawImage(spr([244,200,90],256),mx-340,my-340,680,680);ctx.globalAlpha=g.f*pc;ctx.globalCompositeOperation='source-over';ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(cr,(mx-170)*S,(my-170)*S,340*S,340*S);ctx.restore();ctx.setTransform(S,0,0,S,0,0);
    ctx.globalCompositeOperation='lighter';for(const[sx,sy,sz]of[[mx+160,my-40,34],[mx+250,my+60,22]]){const tw=.6+.4*Math.sin(th*3+sx);ctx.globalAlpha=g.f*pc*tw;flare(sx,sy,sz,tw,'#fff1cf')}
    for(const l of Ln){const ang=.07*Math.sin(th*2+l.ph),y=l.len+l.d.y,fl=.75+.25*Math.sin(th*7+l.ph);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=g.f;ctx.save();ctx.translate(l.x,0);ctx.rotate(ang);ctx.strokeStyle='#c9a24a';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(0,y);ctx.stroke();ctx.translate(0,y);lantern(l.s,fl,th,l.ph);ctx.restore()}
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=g.f*g.a;txt('رمضان كريم',W/2,H*.56,{f:'Amiri',w:700,size:170,fill:'#f4c85a',glow:[['rgba(255,170,50,.5)',30]],sc:.94+.06*g.a});
    ctx.globalAlpha=g.f*g.e;txt('RAMADAN KAREEM',W/2,H*.7,{f:'Playfair Display',w:800,size:74,ls:14,fill:'#fff1cf',glow:[['rgba(255,170,50,.35)',20]]});
    ctx.globalCompositeOperation='lighter';for(const m of Mo){const y=H+10-fr(m.u+m.m*u*.5)*(H+20),x=m.x+m.A*Math.sin(th+m.ph);ctx.globalAlpha=g.f*.45*(.4+.6*(.5+.5*Math.sin(th*3+m.ph)));ctx.drawImage(spr([255,200,110],32),x-m.s*2,y-m.s*2,m.s*4,m.s*4)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.4,[2,4]);vignette(.5);grain(.03)}};
