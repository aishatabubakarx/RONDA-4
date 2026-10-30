/* 8 LIQUID CHROME RIBBONS, seamless loop
   Brief: a silver-blue liquid-metal surface flows in slow folds; the reflection ramp gives crisp chrome bands with white highlights and deep navy troughs.
   Palette: #02040A #0E1B33 #5C7FA8 #EAF3FF #6B88B0 #101C34, violet kiss #7864FF. Hero: the folds. Arc: five sine trains with integer time multipliers (1 to 3 cycles per clip).
   Premium detail: analytic normals from a warped height field drive an environment ramp (that is what real chrome does). */
C[8]=()=>{newTL();const w=800,h=450,k=offscreen(w,h),x=k.getContext('2d'),im=x.createImageData(w,h),d=im.data;
  const stops=[[0,[2,4,10]],[.2,[14,27,51]],[.4,[92,127,168]],[.5,[234,243,255]],[.6,[107,136,176]],[.78,[16,28,52]],[.9,[60,50,150]],[1,[3,5,12]]];
  const LUT=Array.from({length:256},(_,i)=>{const t=i/255;for(let s=0;s<stops.length-1;s++){const[a,ca]=stops[s],[b,cb]=stops[s+1];if(t<=b)return mixc(ca,cb,(t-a)/(b-a))}return stops[stops.length-1][1]});
  const Wv=[[1.3,.7,.55,1,0],[2.1,-1.1,.32,-1,1.3],[.6,1.9,.4,1,2.2],[3.4,.8,.18,2,.5],[-1.7,2.6,.22,-1,4.1]];
  draw=()=>{clear();const th=LOOP(now());const hf=(X,Y)=>{const a=X+.25*Math.sin(Y*2.2+th),b=Y+.2*Math.sin(X*1.7-th*2);let s=0;for(const[kx,ky,A,m,p]of Wv)s+=A*Math.sin(kx*a+ky*b+m*th+p);return s};
    for(let j=0;j<h;j++)for(let i=0;i<w;i++){const X=i/w*3.2,Y=j/h*1.8,e=.01,h0=hf(X,Y),hx=(hf(X+e,Y)-h0)/e,hy=(hf(X,Y+e)-h0)/e,nl=Math.hypot(hx*.8,hy*.8,1),nx=-hx*.8/nl,ny=-hy*.8/nl;
      const t=clamp(.5+.5*(ny*1.15+nx*.55)+.04*h0,0,1),c=LUT[(t*255)|0],o=(j*w+i)*4;d[o]=c[0];d[o+1]=c[1];d[o+2]=c[2];d[o+3]=255}
    x.putImageData(im,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(k,0,0,W,H);bloom(.12,[2,4]);vignette(.5);grain(.035)}};
