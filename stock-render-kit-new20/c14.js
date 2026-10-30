/* 14 NEW YEAR GOLD COUNTDOWN 10 TO 1 THEN HAPPY NEW YEAR, text clip
   Brief: giant gold numerals count 10 to 1 once per 0.9 s, each with a drawing progress ring and an expanding pulse; at zero a flash, a gold burst and the words HAPPY NEW YEAR rise letter by letter with a light sweep.
   Palette: gold #F4C85A / #C88A1C / #FFF3D1 on black with warm haze. Hero: numerals then headline. Arc: 0.7 s establish, countdown to 67% of the clip, payoff 70-92%, fade.
   Premium detail: vertical gold gradient fill, per-second ring, 700 rising gold motes, burst particles on analytic paths. */
C[14]=()=>{newTL();const R=rng(1414),D=DUR/1000,T0=.8,step=.9,tz=T0+10*step,g={f:0,fl:0};
  A(g,{f:0},{f:1},0,.6,'power2.out');A(g,{f:1},{f:0},D-.9,.9,'power1.in');A(g,{fl:1},{fl:0},tz,.9,'power3.out');
  const hl=mkL('HAPPY NEW YEAR','Montserrat',900,128,W/2,10);hl.L.forEach((l,i)=>{A(l,{a:0,y:60,sc:1.3},{a:1,y:0,sc:1},tz+.2+i*.05,.7,'back.out(1.6)')});
  const sub=mkL('MAY EVERY MOMENT SHINE','Montserrat',700,40,W/2,12);sub.L.forEach((l,i)=>A(l,{a:0},{a:1},tz+1.3+i*.03,.5,'power2.out'));
  const M=Array.from({length:700},()=>({x:R()*W,u:R(),m:1+((R()*2)|0),s:1+R()*2.2,ph:R()*TAU,k:2+((R()*5)|0),a:.3+R()*.7}));
  const Bp=Array.from({length:320},()=>({a:R()*TAU,v:200+R()*700,ph:R()*TAU,tw:R()}));
  const gold=(s)=>{const gr=ctx.createLinearGradient(0,-s*.5,0,s*.5);gr.addColorStop(0,'#ffe9b0');gr.addColorStop(.5,'#e8b44a');gr.addColorStop(1,'#a86d12');return gr};
  draw=()=>{clear();const ms=now(),t=ms/1000,u=t/D;let g2=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);g2.addColorStop(0,'#1a1204');g2.addColorStop(1,'#000');ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);ctx.globalAlpha=g.f;
    ctx.globalCompositeOperation='lighter';for(const m of M){const y=H+10-fr(m.u+m.m*u*.5)*(H+20);ctx.globalAlpha=g.f*m.a*(.3+.7*(.5+.5*Math.sin(LOOP(ms)*m.k+m.ph)))*.8;ctx.fillStyle='#f4c85a';ctx.fillRect(m.x,y,m.s,m.s)}
    ctx.globalCompositeOperation='source-over';
    if(t<tz){const q=(t-T0)/step,n=10-Math.floor(Math.max(0,q)),ph=fr(Math.max(0,q));if(q>=-.2){const sc=1+.28*(1-ez('expo.out',Math.min(1,ph*2.2))),a=sm(-.2,0,q)*(ph>.86?1-(ph-.86)/.14*.9:1);ctx.globalAlpha=g.f*a;
        txt(String(n),W/2,H/2+10,{f:'Montserrat',w:900,size:520,sc,fill:gold(520),ls:-10,glow:[['rgba(255,170,50,.45)',34]]});
        ctx.strokeStyle='rgba(244,200,90,.9)';ctx.lineWidth=5;ctx.beginPath();ctx.arc(W/2,H/2,390,-Math.PI/2,-Math.PI/2+TAU*ez('power1.inOut',ph));ctx.stroke();ctx.strokeStyle='rgba(244,200,90,.22)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(W/2,H/2,390,0,TAU);ctx.stroke();
        const pr=ez('expo.out',ph);ctx.globalAlpha=g.f*(1-pr)*.5;ctx.strokeStyle='#ffe29a';ctx.lineWidth=3;ctx.beginPath();ctx.arc(W/2,H/2,300+pr*420,0,TAU);ctx.stroke()}}
    ctx.globalCompositeOperation='lighter';
    if(t>=tz){const tt=t-tz;ctx.globalAlpha=g.f*g.fl*.9;const fr0=800;ctx.drawImage(spr([255,220,140],256),W/2-fr0,H/2-fr0,fr0*2,fr0*2);
      for(const p of Bp){const e=(1-Math.exp(-1.5*tt))/1.5,x=W/2+Math.cos(p.a)*p.v*e,y=H/2+Math.sin(p.a)*p.v*e+45*tt*tt,al=Math.max(0,1-tt/3.6)*(tt>1.2?.4+.6*Math.max(0,Math.sin(tt*30+p.ph)):1);ctx.globalAlpha=g.f*al;ctx.drawImage(spr([255,210,110],32),x-7,y-7,14,14)}}
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;if(t>=tz){const ga=g.f;drawL(hl,H/2-30,{fill:()=>gold(128),glow:[['rgba(255,170,50,.4)',26]],ga});drawL(sub,H/2+85,{fill:'#f4dfaa',ga})}
    if(t>=tz+.6&&t<tz+2.2){const sx=lerp(300,W-300,ez('power2.inOut',(t-tz-.6)/1.6));ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=g.f*.55;const sg=ctx.createLinearGradient(sx-90,0,sx+90,0);sg.addColorStop(0,'rgba(255,240,200,0)');sg.addColorStop(.5,'rgba(255,240,200,1)');sg.addColorStop(1,'rgba(255,240,200,0)');ctx.fillStyle=sg;ctx.fillRect(sx-90,H/2-130,180,150);ctx.restore()}
    ctx.globalAlpha=1;bloom(.28,[2,4]);vignette(.45);grain(.025)}};
