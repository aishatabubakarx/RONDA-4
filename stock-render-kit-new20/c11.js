/* 11 ELECTRIC LIGHTNING ARCS BETWEEN TWO TERMINALS ON BLACK, seamless loop
   Brief: a thin idle arc crackles between two glowing terminals; eight stronger strikes fire per clip with a flickering decay and a blue flash. Black behind for screen blend.
   Palette: electric blue #5A96FF, ice #8CBEFF, core white. Hero: the main bolt with branches. Arc: strike envelope is periodic in the clip, so it loops.
   Premium detail: three-layer bolt (wide glow, mid, white core), recursive branches, sparks around the terminals, whole-frame flash on strike. */
C[11]=()=>{newTL();const A=[170,H*.52],B=[W-170,H*.52],P=[.02,.13,.26,.37,.5,.63,.74,.87],St=[1,.7,1,.8,1,.65,.9,1];
  const bolt=(r,a,b,off,dep,out)=>{if(!dep){out.push(b);return}const mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,o=(r()-.5)*off,m=[mx-dy/l*o,my+dx/l*o];bolt(r,a,m,off*.55,dep-1,out);bolt(r,m,b,off*.55,dep-1,out)};
  const make=(r,a,b,off,dep,br)=>{const pts=[a];bolt(r,a,b,off,dep,pts);const all=[pts];if(br>0)for(let i=6;i<pts.length-6;i+=9){if(r()<.55){const an=Math.atan2(b[1]-a[1],b[0]-a[0])+(r()<.5?-1:1)*(.4+r()*.5),len=120+r()*240,e=[pts[i][0]+Math.cos(an)*len,pts[i][1]+Math.sin(an)*len];all.push(...make(r,pts[i],e,len*.5,5,br-1))}}return all};
  const stroke=(L,al)=>{for(const[w,a,c]of[[16,.1,[90,150,255]],[6,.34,[130,185,255]],[2.4,1,[255,255,255]]]){ctx.strokeStyle=rgba(c,1);ctx.globalAlpha=a*al;ctx.lineWidth=w;ctx.lineJoin='round';ctx.lineCap='round';for(const pts of L){ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke()}}};
  draw=()=>{clear();const ms=now(),u=ms/DUR,D=DUR/1000,th=LOOP(ms),f=Math.floor(ms/66)%Math.floor(DUR/66);let fl=0;ctx.globalCompositeOperation='lighter';
    stroke(make(rng(f*17+5),A,B,200,7,1),.3);
    P.forEach((p,i)=>{const dt=fr(u-p)*D;if(dt>1.4)return;const env=Math.exp(-dt*3.2)*(.55+.45*Math.sin(dt*70)**2)*St[i]*(dt<.08?1.4:1);fl=Math.max(fl,env);stroke(make(rng(f*131+i*977),A,B,260,7,2),Math.min(1,env*1.2))});
    for(const T of[A,B]){const pu=.7+.3*Math.sin(th*3+(T===A?0:1.5));ctx.globalAlpha=(.55+.4*fl)*pu;ctx.drawImage(spr([100,160,255],128),T[0]-170,T[1]-170,340,340);ctx.globalAlpha=.9;ctx.drawImage(spr([255,255,255],64),T[0]-34,T[1]-34,68,68);
      const r=rng(f*7+(T===A?1:2));ctx.strokeStyle='#bcd8ff';ctx.lineWidth=1.6;ctx.globalAlpha=.5+.4*fl;for(let i=0;i<14;i++){const an=r()*TAU,r0=34+r()*20,r1=r0+25+r()*90*(.4+fl);ctx.beginPath();ctx.moveTo(T[0]+Math.cos(an)*r0,T[1]+Math.sin(an)*r0);ctx.lineTo(T[0]+Math.cos(an+.2*(r()-.5))*r1,T[1]+Math.sin(an)*r1);ctx.stroke()}}
    ctx.globalAlpha=.09*fl;ctx.fillStyle='#6aa0ff';ctx.fillRect(0,0,W,H);
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';bloom(.9,[2,4]);grain(.02)}};
