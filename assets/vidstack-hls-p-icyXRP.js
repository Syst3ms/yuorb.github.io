import{aB as w,k as g,aw as E,ai as p,al as d,aC as c,l as v,e as T,at as L,au as y,am as l,aD as S,an as m,aE as k,aF as C,i as D,aG as _}from"./vidstack-sKeoTFgw-3siCqRjI.js";import{VideoProvider as $}from"./vidstack-video-Z_FuNYiD.js";import{R as I}from"./vidstack-4jGm7oeB-nX_1EeQQ.js";import"./app-2MRsTP6h.js";import"./vidstack-html-zw8zw7HW.js";const A=h=>_(h);class R{constructor(t){this.m=t,this.g=null,this.nd=null,this.od={},this.pd=new Set,this.yk=-1}get instance(){return this.g}setup(t,i){this.b=i;const e=p(i.$state.streamType).includes("live"),r=p(i.$state.streamType).includes("ll-");this.g=new t({lowLatencyMode:r,backBufferLength:r?4:e?8:void 0,renderTextTracksNatively:!1,...this.od});const s=this.Sg.bind(this);for(const o of Object.values(t.Events))this.g.on(o,s);this.g.on(t.Events.ERROR,this.U.bind(this));for(const o of this.pd)o(this.g);i.player.dispatch(new d("hls-instance",{detail:this.g})),this.g.attachMedia(this.m),this.g.on(t.Events.FRAG_LOADING,this.Bk.bind(this)),this.g.on(t.Events.AUDIO_TRACK_SWITCHED,this.Tg.bind(this)),this.g.on(t.Events.LEVEL_SWITCHED,this.Ug.bind(this)),this.g.on(t.Events.LEVEL_LOADED,this.Vg.bind(this)),this.g.on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,this.Wg.bind(this)),this.g.on(t.Events.CUES_PARSED,this.Xg.bind(this)),i.qualities[c.Za]=this.Yg.bind(this),v(i.qualities,"change",this.fb.bind(this)),v(i.audioTracks,"change",this.Zg.bind(this)),this.nd=T(this._g.bind(this))}_g(){if(!this.b.$state.live())return;const t=new I(this.$g.bind(this));return t.Bb(),t.ra.bind(t)}$g(){var t;this.b.$state.liveSyncPosition.set(((t=this.g)==null?void 0:t.liveSyncPosition)??1/0)}Sg(t,i){var e;(e=this.b.player)==null||e.dispatch(new d(A(t),{detail:i}))}Wg(t,i){const e=new d(t,{detail:i});let r=-1;for(let s=0;s<i.tracks.length;s++){const o=i.tracks[s],n=o.subtitleTrack??o.closedCaptions,u=new L({id:`hls-${o.kind}${s}`,src:n==null?void 0:n.url,label:o.label,language:n==null?void 0:n.lang,kind:o.kind});u[y.M]=2,u[y.Ua]=()=>{u.mode==="showing"?(this.g.subtitleTrack=s,r=s):r===s&&(this.g.subtitleTrack=-1,r=-1)},o.default&&u.setMode("showing",e),this.b.textTracks.add(u,e)}}Xg(t,i){const e=this.b.textTracks.getById(`hls-${i.track}`);if(!e)return;const r=new d(t,{detail:i});for(const s of i.cues)s.positionAlign="auto",e.addCue(s,r)}Tg(t,i){const e=this.b.audioTracks[i.id];e&&this.b.audioTracks[l.pa](e,!0,new d(t,{detail:i}))}Ug(t,i){const e=this.b.qualities[i.level];e&&this.b.qualities[l.pa](e,!0,new d(t,{detail:i}))}Vg(t,i){if(this.b.$state.canPlay())return;const{type:e,live:r,totalduration:s,targetduration:o}=i.details,n=new d(t,{detail:i});this.b.delegate.c("stream-type-change",r?e==="EVENT"&&Number.isFinite(s)&&o>=10?"live:dvr":"live":"on-demand",n),this.b.delegate.c("duration-change",s,n);const u=this.g.media;this.g.currentLevel===-1&&this.b.qualities[c.Ya](!0,n);for(const a of this.g.audioTracks)this.b.audioTracks[l.oa]({id:a.id+"",label:a.name,language:a.lang||"",kind:"main"},n);for(const a of this.g.levels)this.b.qualities[l.oa]({id:(a.id??a.height+"p")+"",width:a.width,height:a.height,codec:a.codecSet,bitrate:a.bitrate},n);u.dispatchEvent(new d("canplay",{trigger:n}))}U(t,i){var e;if(i.fatal)switch(i.type){case"networkError":this.Ck(i.error);break;case"mediaError":(e=this.g)==null||e.recoverMediaError();break;default:this.Ak(i.error);break}}Bk(){this.yk>=0&&this.zk()}Ck(t){var i;this.zk(),(i=this.g)==null||i.startLoad(),this.yk=window.setTimeout(()=>{this.yk=-1,this.Ak(t)},5e3)}zk(){clearTimeout(this.yk),this.yk=-1}Ak(t){var i;(i=this.g)==null||i.destroy(),this.g=null,this.b.delegate.c("error",{message:t.message,code:1,error:t})}Yg(){this.g&&(this.g.currentLevel=-1)}fb(){const{qualities:t}=this.b;!this.g||t.auto||(this.g[t.switch+"Level"]=t.selectedIndex,S&&(this.m.currentTime=this.m.currentTime))}Zg(){const{audioTracks:t}=this.b;this.g&&this.g.audioTrack!==t.selectedIndex&&(this.g.audioTrack=t.selectedIndex)}Dk(t){var i;g(t.src)&&(this.zk(),(i=this.g)==null||i.loadSource(t.src))}ah(){var t,i;this.zk(),this.b&&(this.b.qualities[c.Za]=void 0),(t=this.g)==null||t.destroy(),this.g=null,(i=this.nd)==null||i.call(this),this.nd=null}}class q{constructor(t,i,e){this.W=t,this.b=i,this.Ca=e,this.bh()}async bh(){const t={onLoadStart:this.Ea.bind(this),onLoaded:this.qd.bind(this),onLoadError:this.ch.bind(this)};let i=await H(this.W,t);if(m(i)&&!g(this.W)&&(i=await O(this.W,t)),!i)return null;if(!i.isSupported()){const e="[vidstack]: `hls.js` is not supported in this environment";return this.b.player.dispatch(new d("hls-unsupported")),this.b.delegate.c("error",{message:e,code:4}),null}return i}Ea(){this.b.player.dispatch(new d("hls-lib-load-start"))}qd(t){this.b.player.dispatch(new d("hls-lib-loaded",{detail:t})),this.Ca(t)}ch(t){const i=k(t);this.b.player.dispatch(new d("hls-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}async function O(h,t={}){var i,e,r,s,o;if(!m(h)){if((i=t.onLoadStart)==null||i.call(t),h.prototype&&h.prototype!==Function)return(e=t.onLoaded)==null||e.call(t,h),h;try{const n=(r=await h())==null?void 0:r.default;if(n&&n.isSupported)(s=t.onLoaded)==null||s.call(t,n);else throw Error("");return n}catch(n){(o=t.onLoadError)==null||o.call(t,n)}}}async function H(h,t={}){var i,e,r;if(g(h)){(i=t.onLoadStart)==null||i.call(t);try{if(await C(h),!D(window.Hls))throw Error("");const s=window.Hls;return(e=t.onLoaded)==null||e.call(t,s),s}catch(s){(r=t.onLoadError)==null||r.call(t,s)}}}const N="https://cdn.jsdelivr.net",f=class f extends ${constructor(){super(...arguments),this.$$PROVIDER_TYPE="HLS",this.Xe=null,this.d=new R(this.video),this.Gb=`${N}/npm/hls.js@^1.0.0/dist/hls.min.js`}get ctor(){return this.Xe}get instance(){return this.d.instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return this.d.od}set config(t){this.d.od=t}get library(){return this.Gb}set library(t){this.Gb=t}preconnect(){g(this.Gb)&&E(this.Gb)}setup(t){super.setup(t),new q(this.Gb,t,i=>{this.Xe=i,this.d.setup(i,t),t.delegate.c("provider-setup",this);const e=p(t.$state.source);e&&this.loadSource(e)})}async loadSource(t,i){g(t.src)&&(this.a.preload=i||"",this.d.Dk(t),this.V=t)}onInstance(t){const i=this.d.instance;return i&&t(i),this.d.pd.add(t),()=>this.d.pd.delete(t)}destroy(){this.d.ah()}};f.supported=w();let b=f;export{b as HLSProvider};
