/* 1 AMBER + TEAL GLASS GYROSCOPE RINGS, 3D seamless loop
   Brief: five nested glass rings tumble on different axes like a gyroscope, glass orbs ride the rings.
   Palette: teal #18D2C4, amber #FFAA46, ice #78EBFF on deep petrol #0B2A36 -> #010305.
   Hero: the ring cluster at centre. Arc: continuous rotation, one extra slow tilt cycle. Premium detail: red/blue edge fringing (chromatic dispersion) + specular glints where a ring faces the light. */
C[1]=()=>{newTL();const R=rng(101),F=1500,Lt=[-.45,-.6,-.66],N=150;
  const rings=[{r:470,w:52,rx:.3,ry:.9,rz:.2,mx:1,my:-1,mz:0,c:[24,210,196]},{r:385,w:46,rx:1.2,ry:.2,rz:.5,mx:-1,my:1,mz:1,c:[255,170,70]},
    {r:300,w:40,rx:.5,ry:1.4,rz:1,mx:1,my:1,mz:-1,c:[40,225,210]},{r:215,w:34,rx:1,ry:.7,rz:.1,mx:-2,my:1,mz:0,c:[255,190,100]},{r:135,w:28,rx:.1,ry:1.1,rz:.7,mx:1,my:-2,mz:1,c:[120,235,255]}];
  const rot=(x,y,z,a,b,c)=>{const y1=y*Math.cos(a)-z*Math.sin(a),z1=y*Math.sin(a)+z*Math.cos(a),x2=x*Math.cos(b)+z1*Math.sin(b),z2=-x*Math.sin(b)+z1*Math.cos(b);return[x2*Math.cos(c)-y1*Math.sin(c),x2*Math.sin(c)+y1*Math.cos(c),z2]};
  const dust=Array.from({length:140},()=>({x:R()*W,y:R()*H,s:.6+R()*1.6,ph:R()*TAU,k:1+((R()*3)|0),m:R()<.5?1:2}));
  const orbs=[];rings.forEach((r,i)=>{for(let j=0;j<2;j++)orbs.push({i,ph:j*Math.PI+i*.9,k:(j?1:-1)*(1+(i%2))})});
  const pt=(r,phi,th)=>{const ax=r.rx+th*r.mx+.22*Math.sin(th),ay=r.ry+th*r.my,az=r.rz+th*r.mz,cp=Math.cos(phi),sp=Math.sin(phi),p=rot(r.r*cp,r.r*sp,0,ax,ay,az),n=rot(cp,sp,0,ax,ay,az),s=F/(F+p[2]);
    return{x:W/2+p[0]*s,y:H/2+p[1]*s,z:p[2],s,fc:clamp(.5+.5*(n[0]*Lt[0]+n[1]*Lt[1]+n[2]*Lt[2])*1.6,0,1)}};
  draw=()=>{clear();const ms=now(),th=LOOP(ms);
    let g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H*.95);g.addColorStop(0,'#0b2a36');g.addColorStop(.55,'#05141c');g.addColorStop(1,'#010305');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.globalCompositeOperation='lighter';
    g=ctx.createRadialGradient(W*.72,H*.78,0,W*.72,H*.78,700);g.addColorStop(0,`rgba(255,150,50,${.16+.05*Math.sin(th)})`);g.addColorStop(1,'rgba(255,150,50,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    g=ctx.createRadialGradient(W*.24,H*.2,0,W*.24,H*.2,760);g.addColorStop(0,`rgba(24,210,196,${.18+.05*Math.cos(th)})`);g.addColorStop(1,'rgba(24,210,196,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    for(const d of dust){ctx.globalAlpha=(.25+.45*(.5+.5*Math.sin(th*d.k+d.ph)));ctx.fillStyle='#bff';const y=((d.y/H+ms/DUR*d.m*.5)%1)*H;ctx.fillRect(d.x,y,d.s,d.s)}
    ctx.globalAlpha=1;ctx.lineCap='round';
    for(const r of rings){const P=[];for(let k=0;k<=N;k++)P.push(pt(r,k/N*TAU,th));
      for(let k=0;k<N;k++){const a=P[k],b=P[k+1],dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1,nx=-dy/l,ny=dx/l,lw=r.w*(a.s+b.s)/2,fc=(a.fc+b.fc)/2;
        ctx.strokeStyle=rgba(r.c,.07+.13*fc);ctx.lineWidth=lw;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        for(const [cc,o] of [[[255,60,90],1.8],[[70,110,255],-1.8],[r.c.map(v=>Math.min(255,v+80)),0]]){ctx.strokeStyle=rgba(cc,(o?.26:.42)*(.2+.8*fc));ctx.lineWidth=1.5*(a.s+b.s)/2+.4;
          for(const e of[-1,1]){ctx.beginPath();ctx.moveTo(a.x+nx*lw*.42*e+o,a.y+ny*lw*.42*e);ctx.lineTo(b.x+nx*lw*.42*e+o,b.y+ny*lw*.42*e);ctx.stroke()}}
        if(fc>.78){ctx.strokeStyle=rgba([255,255,255],(fc-.78)*2.6);ctx.lineWidth=lw*.14;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}
    for(const o of orbs){const r=rings[o.i],p=pt(r,o.ph+th*o.k,th),rad=24*p.s;ctx.globalAlpha=.9;ctx.drawImage(spr(r.c,128),p.x-rad*2.4,p.y-rad*2.4,rad*4.8,rad*4.8);
      ctx.globalAlpha=.85;ctx.strokeStyle=rgba([220,250,255],.9);ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(p.x,p.y,rad,0,TAU);ctx.stroke();
      ctx.globalAlpha=.9;ctx.drawImage(spr([255,255,255],64),p.x-rad*.75,p.y-rad*.95,rad*.9,rad*.9)}
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.5,[2,4]);vignette(.5);grain(.03)}};
