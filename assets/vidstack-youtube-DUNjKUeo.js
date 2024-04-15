import{bg as m,Z as y,bF as r,bx as g,W as v,U as k,bI as w,bq as u,a0 as f}from"./app-DYn1TNBA.js";import{E as I,t as p}from"./vidstack-HTyVv8Yq-IIgq5v3t.js";import{resolveYouTubeVideoId as R}from"./vidstack-DscYSLiW-CA6XwpqT.js";const c={Om:-1,pg:0,qg:1,gj:2,hj:3,ij:5};class j extends I{constructor(t,s){super(t),this.b=s,this.$$PROVIDER_TYPE="YOUTUBE",this.scope=m(),this.ha=y(""),this.za=-1,this.md=-1,this.vc=!1,this.ga=0,this.ba=new r(0,0),this.K=null,this.I=null,this.R=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.K}get type(){return"youtube"}get videoId(){return this.ha()}preconnect(){g(this.Nb())}setup(){super.setup(),v(this.we.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;return this.I||(this.I=p(()=>{if(this.I=null,t())return"Timed out."}),this.t("playVideo")),this.I.promise}async pause(){const{paused:t}=this.b.$state;return this.R||(this.R=p(()=>{this.R=null,t()}),this.t("pauseVideo")),this.R.promise}setMuted(t){t?this.t("mute"):this.t("unMute")}setCurrentTime(t){this.vc=this.b.$state.paused(),this.t("seekTo",t),this.c("seeking",t)}setVolume(t){this.t("setVolume",t*100)}setPlaybackRate(t){this.t("setPlaybackRate",t)}async loadSource(t){if(!k(t.src)){this.K=null,this.ha.set("");return}const s=R(t.src);this.ha.set(s??""),this.K=t}Nb(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}we(){this.z();const t=this.ha();if(!t){this.sc.set("");return}this.sc.set(`${this.Nb()}/embed/${t}`),this.c("load-start")}mg(){const{keyDisabled:t}=this.b.$props,{muted:s,playsInline:a,nativeControls:h}=this.b.$state,e=h();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:e?1:void 0,color:this.color,controls:e?1:0,disablekb:!e||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:e?1:3,mute:s()?1:0,playsinline:a()?1:0}}t(t,s){this.se({event:"command",func:t,args:s?[s]:void 0})}gd(){window.setTimeout(()=>this.se({event:"listening"}),100)}kd(t){this.c("loaded-metadata"),this.c("loaded-data"),this.b.delegate.Ga(void 0,t)}ib(t){var s;(s=this.R)==null||s.resolve(),this.R=null,this.c("pause",void 0,t)}mc(t,s){const{duration:a,realCurrentTime:h}=this.b.$state,e=this.za===c.pg,i=e?a():t,o={currentTime:i,played:this.uc(i)};this.c("time-update",o,s),!e&&Math.abs(i-h())>1&&this.c("seeking",i,s)}uc(t){return this.ga>=t?this.ba:this.ba=new r(0,this.ga=t)}nb(t,s,a){const h={buffered:new r(0,t),seekable:s};this.c("progress",h,a);const{seeking:e,realCurrentTime:i}=this.b.$state;e()&&t>i()&&this.ob(a)}ob(t){const{paused:s,realCurrentTime:a}=this.b.$state;window.clearTimeout(this.md),this.md=window.setTimeout(()=>{this.c("seeked",a(),t),this.md=-1},s()?100:0),this.vc=!1}lc(t){const{seeking:s}=this.b.$state;s()&&this.ob(t),this.c("pause",void 0,t),this.c("end",void 0,t)}ie(t,s){var d,n;const{started:a,paused:h,seeking:e}=this.b.$state,i=t===c.qg,o=t===c.hj,l=(h()||this.I)&&(o||i);if(o&&this.c("waiting",void 0,s),e()&&i&&this.ob(s),!a()&&l&&this.vc){(d=this.I)==null||d.reject("invalid internal play operation"),this.I=null,i&&(this.pause(),this.vc=!1);return}switch(l&&((n=this.I)==null||n.resolve(),this.I=null,this.c("play",void 0,s)),t){case c.ij:this.kd(s);break;case c.qg:this.c("playing",void 0,s);break;case c.gj:this.ib(s);break;case c.pg:this.lc(s);break}this.za=t}te({info:t},s){var i;if(!t)return;const{title:a,intrinsicDuration:h,playbackRate:e}=this.b.$state;if(w(t.videoData)&&t.videoData.title!==a()&&this.c("title-change",t.videoData.title,s),u(t.duration)&&t.duration!==h()){if(u(t.videoLoadedFraction)){const o=((i=t.progressState)==null?void 0:i.loaded)??t.videoLoadedFraction*t.duration,l=new r(0,t.duration);this.nb(o,l,s)}this.c("duration-change",t.duration,s)}if(u(t.playbackRate)&&t.playbackRate!==e()&&this.c("rate-change",t.playbackRate,s),t.progressState){const{current:o,seekableStart:l,seekableEnd:d,loaded:n,duration:b}=t.progressState;this.mc(o,s),this.nb(n,new r(l,d),s),b!==h()&&this.c("duration-change",b,s)}if(u(t.volume)&&f(t.muted)){const o={muted:t.muted,volume:t.volume/100};this.c("volume-change",o,s)}u(t.playerState)&&t.playerState!==this.za&&this.ie(t.playerState,s)}z(){this.za=-1,this.md=-1,this.ga=0,this.ba=new r(0,0),this.I=null,this.R=null,this.vc=!1}}export{j as YouTubeProvider};
