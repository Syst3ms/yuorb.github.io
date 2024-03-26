import{ay as u,o,s as h,az as l,i as b,aA as g,e as f,x as d,aB as m,aC as p,aD as y,p as k,aE as v,aF as c,aG as T,aH as r}from"./vidstack-D1JzjGR7-BC7yGmt-.js";import{R as $}from"./vidstack-BhYx9Fjk-CST9ENV3.js";class S{constructor(t,i){this.i=t,this.b=i,this.sa=g(),this.Cb=!1,this.$c=!1,this.ad=!1,this.Da=new $(this.bd.bind(this)),this.Qe=void 0,this.Dg=void 0,this.pg(),f(this.qg.bind(this)),o(this.cd.bind(this))}get a(){return this.i.media}get c(){return this.b.delegate.c}cd(){this.$c=!1,this.ad=!1,this.Da.ra(),this.sa.empty()}bd(){const t=this.a.currentTime;this.b.$state.realCurrentTime()!==t&&this.$a(t)}pg(){this.t("loadstart",this.Ea),this.t("abort",this.Pe),this.t("emptied",this.rg),this.t("error",this.U),this.t("volumechange",this.ab)}sg(){this.$c||(this.sa.add(this.t("loadeddata",this.tg),this.t("loadedmetadata",this.ug),this.t("canplay",this.hc),this.t("canplaythrough",this.vg),this.t("durationchange",this.wg),this.t("play",this.xb),this.t("progress",this.ic),this.t("stalled",this.xg),this.t("suspend",this.yg),this.t("ratechange",this.Bg)),this.$c=!0)}zg(){this.ad||(this.sa.add(this.t("pause",this.Aa),this.t("playing",this.Ag),this.t("seeked",this.bb),this.t("seeking",this.Cg),this.t("ended",this.Db),this.t("waiting",this.dd)),this.ad=!0)}t(t,i){return d(this.a,t,i.bind(this))}Eg(t){}$a(t,i){const s={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",s,i)}Ea(t){if(this.a.networkState===3){this.Pe(t);return}this.sg(),this.c("load-start",void 0,t)}Pe(t){this.c("abort",void 0,t)}rg(){this.c("emptied",void 0,event)}tg(t){this.c("loaded-data",void 0,t)}ug(t){this.zg(),this.c("loaded-metadata",void 0,t),(m||p&&y(this.b.$state.source()))&&this.b.delegate.jc(this.ed(),t)}ed(){return{provider:k(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}xb(t){this.b.$state.canPlay&&this.c("play",void 0,t)}Aa(t){this.a.readyState===1&&!this.Cb||(this.Cb=!1,this.Da.ra(),this.c("pause",void 0,t))}hc(t){this.b.delegate.jc(this.ed(),t)}vg(t){this.b.$state.started()||this.c("can-play-through",this.ed(),t)}Ag(t){this.Cb=!1,this.c("playing",void 0,t),this.Da.Bb()}xg(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}dd(t){this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}Db(t){this.Da.ra(),this.$a(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()&&v(this.a.controls)&&(this.a.controls=!1)}qg(){this.b.$state.paused()&&d(this.a,"timeupdate",this.Eb.bind(this))}Eb(t){this.$a(this.a.currentTime,t)}wg(t){this.b.$state.ended()&&this.$a(this.a.duration,t),this.c("duration-change",this.a.duration,t)}ab(t){const i={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",i,t)}bb(t){this.$a(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&c(this.a.duration)>c(this.a.currentTime)&&(this.$a(this.a.duration,t),this.a.ended||this.b.player.dispatch(new T("media-play-request",{trigger:t})))}Cg(t){this.c("seeking",this.a.currentTime,t)}ic(t){const i={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",i,t)}yg(t){this.c("suspend",void 0,t)}Bg(t){this.c("rate-change",this.a.playbackRate,t)}U(t){const i=this.a.error;if(!i)return;const s={message:i.message,code:i.code,mediaError:i};this.c("error",s,t)}}class C{constructor(t,i){this.i=t,this.b=i,this.Fb.onaddtrack=this.Fg.bind(this),this.Fb.onremovetrack=this.Gg.bind(this),this.Fb.onchange=this.Hg.bind(this),d(this.b.audioTracks,"change",this.Ig.bind(this))}get Fb(){return this.i.media.audioTracks}Fg(t){const i=t.track;if(i.label==="")return;const s={id:i.id.toString(),label:i.label,language:i.language,kind:i.kind,selected:!1};this.b.audioTracks[r.oa](s,t),i.enabled&&(s.selected=!0)}Gg(t){const i=this.b.audioTracks.getById(t.track.id);i&&this.b.audioTracks[r.Yb](i,t)}Hg(t){let i=this.Re();if(!i)return;const s=this.b.audioTracks.getById(i.id);s&&this.b.audioTracks[r.pa](s,!0,t)}Re(){return Array.from(this.Fb).find(t=>t.enabled)}Ig(t){const{current:i}=t.detail;if(!i)return;const s=this.Fb.getTrackById(i.id);if(s){const e=this.Re();e&&(e.enabled=!1),s.enabled=!0}}}class D{constructor(t,i){this.a=t,this.b=i,this.scope=u(),this.V=null}setup(){new S(this,this.b),"audioTracks"in this.media&&new C(this,this.b),o(()=>{this.a.srcObject=null,this.a.removeAttribute("src");for(const t of this.a.querySelectorAll("source"))t.remove();this.a.load()})}get type(){return""}get media(){return this.a}get currentSrc(){return this.V}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysInline(t){h(this.a,"playsinline",t)}async loadSource({src:t,type:i},s){this.a.preload=s||"",l(t)?(this.Bn(),this.a.srcObject=t):(this.a.srcObject=null,b(t)?i!=="?"?this.yn({src:t,type:i}):(this.Bn(),this.a.src=this.Ik(t)):(this.Bn(),this.a.src=window.URL.createObjectURL(t))),this.a.load(),this.V={src:t,type:i}}yn(t,i){const s=this.a.querySelector("source[data-vds]"),e=s??document.createElement("source");h(e,"src",this.Ik(t.src)),h(e,"type",t.type!=="?"?t.type:i),h(e,"data-vds",""),s||this.a.append(e)}Bn(){var t;(t=this.a.querySelector("source[data-vds]"))==null||t.remove()}Ik(t){const{clipStartTime:i,clipEndTime:s}=this.b.$state,e=i(),a=s();return e>0&&a>0?`${t}#t=${e},${a}`:e>0?`${t}#t=${e}`:a>0?`${t}#t=0,${a}`:t}}export{D as H};
