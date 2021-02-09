!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("web-worker:./ARnftWorker")):"function"==typeof define&&define.amd?define(["exports","web-worker:./ARnftWorker"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ARNFT={},t.Worker)}(this,(function(t,e){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=i(e),r="undefined"!=typeof Float32Array?Float32Array:Array;function a(t,e){var i=new r(3);!function(t,e){var i=e[0],s=e[1],r=e[2],a=e[4],o=e[5],n=e[6],h=e[8],c=e[9],d=e[10];t[0]=Math.hypot(i,s,r),t[1]=Math.hypot(a,o,n),t[2]=Math.hypot(h,c,d)}(i,e);var s=1/i[0],a=1/i[1],o=1/i[2],n=e[0]*s,h=e[1]*a,c=e[2]*o,d=e[4]*s,l=e[5]*a,u=e[6]*o,p=e[8]*s,v=e[9]*a,_=e[10]*o,f=n+l+_,w=0;return f>0?(w=2*Math.sqrt(f+1),t[3]=.25*w,t[0]=(u-v)/w,t[1]=(p-c)/w,t[2]=(h-d)/w):n>l&&n>_?(w=2*Math.sqrt(1+n-l-_),t[3]=(u-v)/w,t[0]=.25*w,t[1]=(h+d)/w,t[2]=(p+c)/w):l>_?(w=2*Math.sqrt(1+l-n-_),t[3]=(p-c)/w,t[0]=(h+d)/w,t[1]=.25*w,t[2]=(u+v)/w):(w=2*Math.sqrt(1+_-n-l),t[3]=(h-d)/w,t[0]=(p+c)/w,t[1]=(u+v)/w,t[2]=.25*w),t}function o(){var t=new r(3);return r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function n(t,e,i){var s=new r(3);return s[0]=t,s[1]=e,s[2]=i,s}function h(t,e,i){var s=e[0],r=e[1],a=e[2],o=i[0],n=i[1],h=i[2];return t[0]=r*h-a*n,t[1]=a*o-s*h,t[2]=s*n-r*o,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var c,d=function(t){var e=t[0],i=t[1],s=t[2];return Math.hypot(e,i,s)};c=o();!function(){var t,e=(t=new r(4),r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t)}();function l(){var t=new r(4);return r!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function u(t,e,i,s){var r,a,o,n,h,c=e[0],d=e[1],l=e[2],u=e[3],p=i[0],v=i[1],_=i[2],f=i[3];return(a=c*p+d*v+l*_+u*f)<0&&(a=-a,p=-p,v=-v,_=-_,f=-f),1-a>1e-6?(r=Math.acos(a),o=Math.sin(r),n=Math.sin((1-s)*r)/o,h=Math.sin(s*r)/o):(n=1-s,h=s),t[0]=n*c+h*p,t[1]=n*d+h*v,t[2]=n*l+h*_,t[3]=n*u+h*f,t}var p,v,_,f,w,m,g,y=function(t,e){var i=e[0],s=e[1],r=e[2],a=e[3],o=i*i+s*s+r*r+a*a;return o>0&&(o=1/Math.sqrt(o)),t[0]=i*o,t[1]=s*o,t[2]=r*o,t[3]=a*o,t};p=o(),v=n(1,0,0),_=n(0,1,0),f=l(),w=l(),m=new r(9),r!=Float32Array&&(m[1]=0,m[2]=0,m[3]=0,m[5]=0,m[6]=0,m[7]=0),m[0]=1,m[4]=1,m[8]=1,g=m;class M{}class R{constructor(t,e,i,s){this._processing=!1,this.position=o(),this.rotation=l(),this._dispatcher=t,this.markerURL=e,this.vw=i,this.vh=s}initialize(t){return new Promise(((e,i)=>{this.worker=new s.default,this.worker.onmessage=i=>{this.load(t).then((()=>{this.worker.onmessage=t=>{let e;if("found"==t.data.type){let i=this.getArrayMatrix(JSON.parse(t.data.matrixGL_RH)),s=function(t,e,i,s,a,o,n,h,c,d,l,u,p,v,_,f){var w=new r(16);return w[0]=t,w[1]=e,w[2]=i,w[3]=s,w[4]=a,w[5]=o,w[6]=n,w[7]=h,w[8]=c,w[9]=d,w[10]=l,w[11]=u,w[12]=p,w[13]=v,w[14]=_,w[15]=f,w}(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9],i[10],i[11],i[12],i[13],i[14],i[15]);!function(t,e){t[0]=e[12],t[1]=e[13],t[2]=e[14]}(this.position,s),a(this.rotation,s),e=new M,e.matrix=s.values(),e.position=this.position.values(),e.rotation=this.rotation.values()}this._dispatcher.found(e),this._processing=!1},e(!0)}))}}))}getArrayMatrix(t){var e=[];for(var i in t)e[i]=t[i];return e}process(t){this._processing||(this._processing=!0,this.worker.postMessage({type:"process",imagedata:t}))}load(t){return new Promise(((e,i)=>{var s=320/Math.max(this.vw,this.vh/3*4);let r=this.vw*s,a=this.vh*s,o=Math.max(r,a/3*4),n=Math.max(a,r/4*3);this.worker.postMessage({type:"load",pw:o,ph:n,camera_para:t,marker:this.markerURL}),this.worker.onmessage=t=>{var i=t.data;switch(i.type){case"loaded":JSON.parse(i.proj);break;case"endLoading":1==i.end&&e(!0)}this._processing=!1}}))}}class E{constructor(t,e,i,s){this._nodes=[],this._markerURL=e,this._worker=new R(this,this._markerURL,i,s),this._nodes.push(t)}initialize(t){return this._cameraURL=t,this._worker.initialize(this._cameraURL)}found(t){this._nodes.forEach((e=>{e.found(t)}))}process(t){this._worker.process(t)}update(){this._nodes.forEach((t=>{t.update()}))}destroy(){}}class k{constructor(t){this.canvas_process=document.createElement("canvas"),this.context_process=this.canvas_process.getContext("2d"),this.video=t}getHeight(){return this.vh}getWidth(){return this.vw}getImage(){return this.context_process.drawImage(this.video,0,0,this.vw,this.vh,this.ox,this.oy,this.w,this.h),this.context_process.getImageData(0,0,this.pw,this.ph)}initialize(t){return this._facing=t.facingMode||"environment",new Promise((async(t,e)=>{if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var i={audio:!1,video:{facingMode:this._facing,width:{min:480,max:640}}};navigator.mediaDevices.getUserMedia(i).then((async i=>{this.video.srcObject=i,this.video=await new Promise(((t,e)=>{this.video.onloadedmetadata=()=>t(this.video)})).then((e=>{this.vw=this.video.videoWidth,this.vh=this.video.videoHeight;var i=320/Math.max(this.vw,this.vh/3*4);return this.w=this.vw*i,this.h=this.vh*i,this.pw=Math.max(this.w,this.h/3*4),this.ph=Math.max(this.h,this.w/4*3),this.ox=(this.pw-this.w)/2,this.oy=(this.ph-this.h)/2,this.canvas_process.width=this.pw,this.canvas_process.height=this.ph,this.context_process.fillStyle="black",this.context_process.fillRect(0,0,this.pw,this.ph),t(!0),e})).catch((t=>(console.log(t),e(t),null)))})).catch((t=>{console.error(t),e(t)}))}else e("Sorry, Your device does not support this experince.")}))}}var A={name:"ARnft",assetURL:"resources/",workerURL:"./resources/jsartoolkit5/artoolkit/artoolkit.wasm_worker.js",cameraDataURL:"../../data/camera_para.dat",videoSettings:{width:{min:640,max:800},height:{min:480,max:600},facingMode:"environment"}};class x{constructor(t,e){this.count=0,this._controllers=new Map,this._fps=15,this._lastTime=0,this.appData=A,this._videoRenderer=t,this._cameraDataURL=e,this.setFPS(this._fps)}addNFTEntity(t,e){return e||(e="entity-"+this.count++),this._controllers.set(e,t),t}addNFTEntity2(t,e,i){i||(i="entity-"+this.count++);let s=new E(t,e,120,120);this._controllers.set(i,s)}getEntityByName(t){return this._controllers.has(t)?this._controllers.get(t):null}getCameraView(){return this._videoRenderer}setFPS(t){this._fps=1e3/t}async init(t,e,i){await function(t,e){return fetch(t).then((t=>{if(!t.ok)throw new Error("HTTP error, status = "+t.status);return t.json()})).then((t=>{console.log(t),e=t,console.log(e)})).catch((function(t){return console.error(t),Promise.reject(!1)})),!0}(t,this.appData),this._videoRenderer=new k(document.getElementById("video")),await this._videoRenderer.initialize(this.appData.videoSettings).catch((t=>(console.log(t),Promise.reject(!1))));const s=new x(this._videoRenderer,e);return await s.initialize().catch((t=>(console.log(t),Promise.reject(!1)))),!0}initialize(){console.log("init ARnft");let t=[];return this._controllers.forEach((e=>{t.push(e.initialize(this._cameraDataURL))})),Promise.all(t).then((()=>!0))}update(){let t,e=Date.now();e-this._lastTime>this._fps&&(t=this._videoRenderer.getImage(),this._lastTime=e),this._controllers.forEach((e=>{e.update(),t&&e.process(t)}))}destroy(){this._controllers.forEach((t=>{t.destroy()})),this._controllers.clear(),this._videoRenderer=null}}x.EVENT_SET_CAMERA="ARNFT_SET_CAMERA_EVENT",x.EVENT_FOUND_MARKER="ARNFT_FOUND_MARKER_EVENT",x.EVENT_LOST_MARKER="ARNFT_LOST_MARKER_EVENT",t.ARnft=x,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=ARnft.js.map
