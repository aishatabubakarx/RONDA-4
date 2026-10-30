/* 5 CYAN PARTICLE DOT-GRID OCEAN WAVE, seamless loop
   Brief: a perspective field of 12,000 tiny dots rolls like a sea; crests brighten to white, distance fades to deep blue. Empty upper third for titles.
   Palette: cyan #3CC8FF, white crest #F2FCFF, indigo #1B2B7A on #01030A. Hero: the rolling lattice. Arc: two wave trains and a moving ripple source on integer cycles.
   Premium detail: dot size and brightness follow wave height and depth, horizon haze. */
C[5]=()=>{newTL();const NX=150,NZ=46,f=900,camH=1.55,pal=Array.from({length:24},(_,i)=>rgba(mixc([40,110,255],[235,252,255],clamp(i/20,0,1)**1.4),1));
  draw=()=>{clear();const ms=now(),th=LOOP(ms);let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'#01030a');g.addColorStop(.3,'#061038');g.addColorStop(.42,'#081344');g.addColorStop(1,'#01030a');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';g=ctx.createRadialGradient(W/2,H*.33,0,W/2,H*.33,900);g.addColorStop(0,'rgba(60,120,255,.13)');g.addColorStop(1,'rgba(60,120,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    const xs=1.6*Math.sin(th),zs=5+1.8*Math.cos(th*2);
    for(let gz=NZ-1;gz>=0;gz--){const Z=1.35*Math.pow(1.062,gz),far=1-gz/NZ;
      for(let gx=0;gx<NX;gx++){const X=((gx+.5)/NX-.5)*2*Z*1.25,d=Math.hypot(X-xs,Z-zs);
        const h=.24*Math.sin(Z*1.5-th*2)*Math.sin(X*.8+th)+.16*Math.sin(d*2.3-th*3)+.08*Math.sin(X*1.9+Z*.9+th),sx=W/2+X*f/Z;if(sx<-10||sx>W+10)continue;
        const sy=H*.32+(camH-h)*f/Z,sz=Math.max(.9,f/Z*.016*(1+h*2.4)),cr=clamp((h+.3)/.7,0,1);
        ctx.globalAlpha=(.18+.82*cr**1.3)*(.35+.65*far)*Math.min(1,gz/5);ctx.fillStyle=pal[(cr*23)|0];ctx.fillRect(sx-sz/2,sy-sz/2,sz,sz)}}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.8,[2,4]);vignette(.5);grain(.03)}};
