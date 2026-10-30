/* 7 BLACK MARBLE WITH GOLD VEINS, slow seamless loop
   Brief: charcoal marble swirls slowly while thin gold veins glow and shift; a soft diagonal light sweep crosses once per loop; gold flecks twinkle.
   Palette: marble #0B0B0D -> #2A2A30, gold #F4C85A / #C88A1C / #FFF3D1. Hero: the vein network. Arc: warped noise travels on a circle in noise space so t=0 equals t=D.
   Premium detail: a broad faint gold glow around each vein and a sweep highlight. */
C[7]=()=>{newTL();const R=rng(707),w=720,h=405,k=offscreen(w,h),x=k.getContext('2d'),im=x.createImageData(w,h),d=im.data;
  const F=Array.from({length:44},()=>({x:R()*W,y:R()*H,ph:R()*TAU,k:1+((R()*3)|0),r:10+R()*22}));
  const ss=(a,b,v)=>{const t=clamp((v-a)/(b-a),0,1);return t*t*(3-2*t)};
  draw=()=>{clear();const ms=now(),th=LOOP(ms),cx=Math.cos(th),sy=Math.sin(th);
    for(let j=0;j<h;j++)for(let i=0;i<w;i++){const px=i/w*1.5,py=j/h*.85;
      const qx=fbm(px*.5+cx*.5,py*.5+sy*.5,2),qy=fbm(px*.5+5.2-sy*.5,py*.5+1.3+cx*.5,2),v=fbm(px*.45+1.5*qx+cx*.3,py*.45+1.5*qy+sy*.3,2),a=Math.abs(v-.05);
      const vein=1-ss(0,.05,a),glw=(1-ss(0,.2,a))*.2,v2=(1-ss(0,.014,Math.abs(qy-.12)))*.5*ss(.05,.4,Math.abs(v));
      const base=.045+.1*(.5+.5*qx)+.05*v*v,gold=clamp(vein+v2,0,1)+glw,o=(j*w+i)*4;
      d[o]=clamp(base*255+244*gold,0,255);d[o+1]=clamp(base*255+(176+30*vein)*gold,0,255);d[o+2]=clamp(base*258+(70+120*vein*vein)*gold,0,255);d[o+3]=255}
    x.putImageData(im,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(k,0,0,W,H);
    ctx.globalCompositeOperation='lighter';const sx=-500+(W+1000)*fr(ms/DUR),g=ctx.createLinearGradient(sx-260,0,sx+260,0);g.addColorStop(0,'rgba(255,230,170,0)');g.addColorStop(.5,'rgba(255,230,170,.11)');g.addColorStop(1,'rgba(255,230,170,0)');
    ctx.save();ctx.transform(1,0,-.35,1,0,0);ctx.fillStyle=g;ctx.fillRect(sx-260,0,520,H);ctx.restore();
    for(const f of F){const t=(.5+.5*Math.sin(th*f.k+f.ph))**3;ctx.globalAlpha=t*.85;ctx.drawImage(spr([255,226,150],64),f.x-f.r,f.y-f.r,f.r*2,f.r*2)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.35,[2,4]);vignette(.45);grain(.035)}};
