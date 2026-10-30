/* 17 BLACK FRIDAY SALE BOLD KINETIC TYPE, promo clip (no brand names)
   Brief: red, yellow and white diagonal stripes wipe across black; BLACK and FRIDAY slam in letter by letter with a bounce and camera shake; a red UP TO 70% OFF badge pops; ticker bars scroll top and bottom.
   Palette: black #050505, red #E10600, yellow #FFD400, white #FFFFFF. Hero: the two-line headline. Arc: wipes 0-1 s, slams 1-2.4 s, badge 3.4 s, hold with scrolling tickers and slow push, fade out.
   Premium detail: drop-shadow offset on FRIDAY, per-slam shake that decays, impact flash and spark lines. */
C[17]=()=>{newTL();const D=DUR/1000,g={f:0,b:0,w:0,push:0};
  A(g,{f:0},{f:1},0,.15,'none');A(g,{f:1},{f:0},D-.8,.8,'power1.in');A(g,{w:0},{w:1},.1,1.1,'power3.inOut');A(g,{b:0},{b:1},3.4,.9,'elastic.out(1,.5)');A(g,{push:0},{push:1},0,D,'none');
  const b1=mkL('BLACK','Montserrat',900,310,W/2,6),f1=mkL('FRIDAY','Montserrat',900,310,W/2,6),hits=[];
  b1.L.forEach((l,i)=>{const t=1.1+i*.1;A(l,{a:0},{a:1},t,.1);A(l,{y:-760},{y:0},t,.8,'bounce.out');hits.push(t+.42)});
  f1.L.forEach((l,i)=>{const t=1.7+i*.1;A(l,{a:0},{a:1},t,.1);A(l,{y:-760},{y:0},t,.8,'bounce.out');hits.push(t+.42)});
  const tick='BLACK FRIDAY   \u2022   BIG SALE   \u2022   UP TO 70% OFF   \u2022   LIMITED TIME   \u2022   ';let tkw=0;
  draw=()=>{clear();const ms=now(),t=ms/1000;let sh=0;for(const h of hits)if(t>h)sh+=Math.exp(-(t-h)*9)*7;const sx=sh*Math.sin(t*95),sy=sh*Math.cos(t*83);
    ctx.fillStyle='#050505';ctx.fillRect(0,0,W,H);let rg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H);rg.addColorStop(0,'rgba(225,6,0,.28)');rg.addColorStop(1,'rgba(225,6,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
    ctx.save();ctx.translate(sx,sy);ctx.scale(1+.04*g.push,1+.04*g.push);ctx.translate(-W/2*.0,0);
    ctx.save();ctx.translate(W/2,H/2);ctx.rotate(-.18);ctx.globalAlpha=.08;ctx.fillStyle='#fff';for(let i=-12;i<12;i++){const x=i*200+((t*40)%200);ctx.fillRect(x,-H,70,H*2)}ctx.restore();ctx.globalAlpha=1;
    if(g.w<1){for(const[c,o]of[['#e10600',0],['#ffd400',.14],['#ffffff',.28]]){const p=clamp((g.w-o)/.72,0,1);if(p<=0||p>=1)continue;const e=ez('power2.inOut',p),x=lerp(-700,W+700,e);ctx.save();ctx.translate(x,H/2);ctx.rotate(-.18);ctx.fillStyle=c;ctx.fillRect(-170,-H,340,H*2);ctx.restore()}}
    ctx.globalAlpha=g.f;drawL(f1,722,{fill:'#e10600',ga:1});drawL(b1,410,{fill:'#fff',glow:[['rgba(255,255,255,.25)',20]]});
    for(const l of f1.L)l.y+=0;drawL(f1,714,{fill:'#ffd400'});
    ctx.save();ctx.translate(W/2,892);ctx.scale(g.b,g.b);ctx.globalAlpha=g.f*clamp(g.b,0,1);ctx.fillStyle='#e10600';roundRect(-400,-62,800,124,22);ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=5;roundRect(-390,-52,780,104,16);ctx.stroke();txt('UP TO 70% OFF',0,4,{f:'Montserrat',w:900,size:76,ls:4,fill:'#fff'});ctx.restore();
    ctx.globalAlpha=g.f;ctx.fillStyle='#e10600';ctx.fillRect(0,0,W,84);ctx.fillStyle='#ffd400';ctx.fillRect(0,H-84,W,84);
    if(!tkw){ctx.font='900 40px "Montserrat"';ctx.letterSpacing='4px';tkw=ctx.measureText(tick).width}
    ctx.font='900 40px "Montserrat"';ctx.letterSpacing='4px';ctx.textBaseline='middle';ctx.textAlign='left';const off=-((t*260)%tkw);ctx.fillStyle='#fff';for(let x=off;x<W;x+=tkw)ctx.fillText(tick,x,44);ctx.fillStyle='#050505';const off2=-tkw+((t*260)%tkw);for(let x=off2;x<W;x+=tkw)ctx.fillText(tick,x,H-40);
    ctx.letterSpacing='0px';ctx.restore();
    for(const h of hits){const q=t-h;if(q>0&&q<.35){ctx.globalAlpha=(1-q/.35)*.06;ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H)}}
    ctx.globalAlpha=1;vignette(.5);grain(.025)}};
