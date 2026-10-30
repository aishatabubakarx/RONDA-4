/* 10 RISING FIRE EMBERS AND SPARKS ON BLACK, seamless loop
   Brief: 1,500 embers drift upward on turbulent paths, white-hot at birth, orange mid-life, dark red as they die; faint heat glow at the bottom edge. Black elsewhere for screen blend.
   Palette: #FFE6A0 #FF781E #C81E0A. Hero: the ember field. Arc: three speed classes (1, 2, 3 screens per clip), flicker on integer cycles.
   Premium detail: size and brightness fall with age, short motion tails on the bigger embers. */
C[10]=()=>{newTL();const R=rng(1010),N=1500,pal=[[255,236,170],[255,190,90],[255,140,40],[235,90,25],[190,45,15],[130,25,10]];
  const E=Array.from({length:N},()=>{const t=R();return{x:R()*W,u:R(),m:1+((R()*3)|0),A:25+R()*90,k:1+((R()*3)|0),ph:R()*TAU,r:t<.8?1.4+R()*1.8:t<.97?3.2+R()*3:7+R()*6,fk:20+((R()*30)|0),fp:R()*TAU,a:.5+R()*.5,z:R()*9}});
  const pos=(e,pr,th)=>[e.x+e.A*Math.sin(th*e.k+e.ph+pr*4)+60*lnoise(e.x*.004,pr*2.2+e.z,th,1),H+30-pr*(H+60)];
  draw=()=>{clear();const ms=now(),th=LOOP(ms),u=ms/DUR;let g=ctx.createLinearGradient(0,H,0,H*.45);g.addColorStop(0,`rgba(255,90,20,${.17+.04*Math.sin(th*3)})`);g.addColorStop(.4,'rgba(200,50,10,.05)');g.addColorStop(1,'rgba(200,50,10,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';
    for(const e of E){const pr=fr(e.u+e.m*u),[x,y]=pos(e,pr,th),al=e.a*Math.pow(1-pr,.5)*sm(0,.04,pr)*(.72+.28*Math.sin(th*e.fk+e.fp));if(al<.02)continue;
      const r=e.r*(1-pr*.55),c=pal[Math.min(5,(pr*pr*6)|0)];
      if(e.r>3){const[x2,y2]=pos(e,Math.max(0,pr-.014),th);ctx.globalAlpha=al*.45;ctx.strokeStyle=rgba(c,1);ctx.lineWidth=r*.7;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke()}
      ctx.globalAlpha=al;ctx.drawImage(spr(c,64),x-r*2.4,y-r*2.4,r*4.8,r*4.8)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.9,[2,4]);grain(.02)}};
