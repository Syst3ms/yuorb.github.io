import{bE as E,U as c,bx as S,V as b,by as v,ak as m,W as w,bn as u,bu as _,bv as y,bo as l,bB as q,bp as L,bC as D,bD as I,ab as R,ao as $}from"./app-DYn1TNBA.js";import{VideoProvider as x}from"./vidstack-video-C_RzlZwf.js";import{R as C}from"./vidstack-Ccp8mxka-BAfFwNgz.js";import"./vidstack-Dgd3Tj9x-Co9WelaB.js";const O=h=>$(h);class A{constructor(t,i){this.m=t,this.b=i,this.d=null,this.qb=null,this.rb={},this.sb=new Set,this.na=-1}get instance(){return this.d}setup(t){const{streamType:i}=this.b.$state,e=b(i).includes("live"),r=b(i).includes("ll-");this.d=new t({lowLatencyMode:r,backBufferLength:r?4:e?8:void 0,renderTextTracksNatively:!1,...this.rb});const n=this.Oi.bind(this);for(const o of Object.values(t.Events))this.d.on(o,n);this.d.on(t.Events.ERROR,this.Q.bind(this));for(const o of this.sb)o(this.d);this.b.player.dispatch("hls-instance",{detail:this.d}),this.d.attachMedia(this.m),this.d.on(t.Events.FRAG_LOADING,this.Pi.bind(this)),this.d.on(t.Events.AUDIO_TRACK_SWITCHED,this.Qi.bind(this)),this.d.on(t.Events.LEVEL_SWITCHED,this.Ri.bind(this)),this.d.on(t.Events.LEVEL_LOADED,this.Si.bind(this)),this.d.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Ti.bind(this)),this.d.on(t.Events.CUES_PARSED,this.Ui.bind(this)),this.b.qualities[v.Ia]=this.je.bind(this),m(this.b.qualities,"change",this.ke.bind(this)),m(this.b.audioTracks,"change",this.le.bind(this)),this.qb=w(this.me.bind(this))}aa(t,i){return new u(O(t),{detail:i})}me(){if(!this.b.$state.live())return;const t=new C(this.ne.bind(this));return t.Xa(),t.$.bind(t)}ne(){var t;this.b.$state.liveSyncPosition.set(((t=this.d)==null?void 0:t.liveSyncPosition)??1/0)}Oi(t,i){var e;(e=this.b.player)==null||e.dispatch(this.aa(t,i))}Ti(t,i){const e=this.aa(t,i);let r=-1;for(let n=0;n<i.tracks.length;n++){const o=i.tracks[n],s=o.subtitleTrack??o.closedCaptions,d=new _({id:`hls-${o.kind}-${n}`,src:s==null?void 0:s.url,label:o.label,language:s==null?void 0:s.lang,kind:o.kind,default:o.default});d[y.ma]=2,d[y.hb]=()=>{d.mode==="showing"?(this.d.subtitleTrack=n,r=n):r===n&&(this.d.subtitleTrack=-1,r=-1)},this.b.textTracks.add(d,e)}}Ui(t,i){var o;const e=(o=this.d)==null?void 0:o.subtitleTrack,r=this.b.textTracks.getById(`hls-${i.type}-${e}`);if(!r)return;const n=this.aa(t,i);for(const s of i.cues)s.positionAlign="auto",r.addCue(s,n)}Qi(t,i){const e=this.b.audioTracks[i.id];if(e){const r=this.aa(t,i);this.b.audioTracks[l.ea](e,!0,r)}}Ri(t,i){const e=this.b.qualities[i.level];if(e){const r=this.aa(t,i);this.b.qualities[l.ea](e,!0,r)}}Si(t,i){var g;if(this.b.$state.canPlay())return;const{type:e,live:r,totalduration:n,targetduration:o}=i.details,s=this.aa(t,i);this.b.delegate.c("stream-type-change",r?e==="EVENT"&&Number.isFinite(n)&&o>=10?"live:dvr":"live":"on-demand",s),this.b.delegate.c("duration-change",n,s);const d=this.d.media;this.d.currentLevel===-1&&this.b.qualities[v.Wa](!0,s);for(const a of this.d.audioTracks){const p={id:a.id.toString(),label:a.name,language:a.lang||"",kind:"main"};this.b.audioTracks[l.da](p,s)}for(const a of this.d.levels){const p={id:((g=a.id)==null?void 0:g.toString())??a.height+"p",width:a.width,height:a.height,codec:a.codecSet,bitrate:a.bitrate};this.b.qualities[l.da](p,s)}d.dispatchEvent(new u("canplay",{trigger:s}))}Q(t,i){var e;if(i.fatal)switch(i.type){case"networkError":this.pe(i.error);break;case"mediaError":(e=this.d)==null||e.recoverMediaError();break;default:this.qc(i.error);break}}Pi(){this.na>=0&&this._a()}pe(t){var i;this._a(),(i=this.d)==null||i.startLoad(),this.na=window.setTimeout(()=>{this.na=-1,this.qc(t)},5e3)}_a(){clearTimeout(this.na),this.na=-1}qc(t){this.b.delegate.c("error",{message:t.message,code:1,error:t})}je(){this.d&&(this.d.currentLevel=-1)}ke(){const{qualities:t}=this.b;!this.d||t.auto||(this.d[t.switch+"Level"]=t.selectedIndex,q&&(this.m.currentTime=this.m.currentTime))}le(){const{audioTracks:t}=this.b;this.d&&this.d.audioTrack!==t.selectedIndex&&(this.d.audioTrack=t.selectedIndex)}Vi(t){var i;this._a(),c(t.src)&&((i=this.d)==null||i.loadSource(t.src))}Wi(){var t,i;this._a(),(t=this.d)==null||t.destroy(),this.d=null,(i=this.qb)==null||i.call(this),this.qb=null}}class H{constructor(t,i,e){this.L=t,this.b=i,this.La=e,this.qe()}async qe(){const t={onLoadStart:this.Ma.bind(this),onLoaded:this.tb.bind(this),onLoadError:this.re.bind(this)};let i=await V(this.L,t);if(L(i)&&!c(this.L)&&(i=await N(this.L,t)),!i)return null;if(!i.isSupported()){const e="[vidstack] `hls.js` is not supported in this environment";return this.b.player.dispatch(new u("hls-unsupported")),this.b.delegate.c("error",{message:e,code:4}),null}return i}Ma(){this.b.player.dispatch(new u("hls-lib-load-start"))}tb(t){this.b.player.dispatch(new u("hls-lib-loaded",{detail:t})),this.La(t)}re(t){const i=D(t);this.b.player.dispatch(new u("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}async function N(h,t={}){var i,e,r,n,o;if(!L(h)){if((i=t.onLoadStart)==null||i.call(t),h.prototype&&h.prototype!==Function)return(e=t.onLoaded)==null||e.call(t,h),h;try{const s=(r=await h())==null?void 0:r.default;if(s&&s.isSupported)(n=t.onLoaded)==null||n.call(t,s);else throw Error("");return s}catch(s){(o=t.onLoadError)==null||o.call(t,s)}}}async function V(h,t={}){var i,e,r;if(c(h)){(i=t.onLoadStart)==null||i.call(t);try{if(await I(h),!R(window.Hls))throw Error("");const n=window.Hls;return(e=t.onLoaded)==null||e.call(t,n),n}catch(n){(r=t.onLoadError)==null||r.call(t,n)}}}const j="https://cdn.jsdelivr.net",f=class f extends x{constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.rc=null,this.e=new A(this.video,this.b),this.oa=`${j}/npm/hls.js@^1.5.0/dist/hls.min.js`}get ctor(){return this.rc}get instance(){return this.e.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.e.rb}set config(t){this.e.rb=t}get library(){return this.oa}set library(t){this.oa=t}preconnect(){c(this.oa)&&S(this.oa)}setup(){super.setup(),new H(this.oa,this.b,t=>{this.rc=t,this.e.setup(t),this.b.delegate.c("provider-setup",this);const i=b(this.b.$state.source);i&&this.loadSource(i)})}async loadSource(t,i){if(!c(t.src)){this.oc();return}this.a.preload=i||"",this.ge(t,"application/x-mpegurl"),this.e.Vi(t),this.K=t}onInstance(t){const i=this.e.instance;return i&&t(i),this.e.sb.add(t),()=>this.e.sb.delete(t)}destroy(){this.e.Wi()}};f.supported=E();let T=f;export{T as HLSProvider};
