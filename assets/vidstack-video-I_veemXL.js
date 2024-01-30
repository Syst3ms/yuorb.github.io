import{Q as p,aB as h,aC as u,aD as m,o as l,l as n,D as g}from"./vidstack-iVChOPoI-jn5iU3Z9.js";import{H as f}from"./vidstack-html-QTjtfKHq.js";import{J as k,K as c}from"./vidstack-ebJdpDfl-ORQDBbuh.js";import"./vidstack-XrFM82kz-chqeYwh9.js";import"./app-DiurdpuK.js";class b{constructor(t,e){this.m=t,this.b=e,t.textTracks.onaddtrack=this.Wc.bind(this),l(this.cd.bind(this))}Wc(t){const e=t.track;if(!e||P(this.m,e))return;const i=new k({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});i[c.T]={track:e},i[c.M]=2,i[c.te]=!0;let s=0;const a=d=>{if(e.cues)for(let o=s;o<e.cues.length;o++)i.addCue(e.cues[o],d),s++};a(t),e.oncuechange=a,this.b.textTracks.add(i,t),i.setMode(e.mode,t)}cd(){var t;this.m.textTracks.onaddtrack=null;for(const e of this.b.textTracks){const i=(t=e[c.T])==null?void 0:t.track;i!=null&&i.oncuechange&&(i.oncuechange=null)}}}function P(r,t){return Array.from(r.children).find(e=>e.track===t)}class y{constructor(t,e){this.m=t,this.a=e,this.B=(i,s)=>{this.a.delegate.c("picture-in-picture-change",i,s)},n(this.m,"enterpictureinpicture",this.Jg.bind(this)),n(this.m,"leavepictureinpicture",this.Kg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return u(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Jg(t){this.B(!0,t)}Kg(t){this.B(!1,t)}}class I{constructor(t,e){this.m=t,this.a=e,this.I="inline",n(this.m,"webkitpresentationmodechanged",this.Ua.bind(this))}get Se(){return h(this.m)}async kc(t){this.I!==t&&this.m.webkitSetPresentationMode(t)}Ua(t){var i;const e=this.I;this.I=this.m.webkitPresentationMode,(i=this.a.player)==null||i.dispatch(new g("video-presentation-change",{detail:this.I,trigger:t})),["fullscreen","picture-in-picture"].forEach(s=>{(this.I===s||e===s)&&this.a.delegate.c(`${s}-change`,this.I===s,t)})}}class T{constructor(t){this.fa=t}get active(){return this.fa.I==="fullscreen"}get supported(){return this.fa.Se}async enter(){this.fa.kc("fullscreen")}async exit(){this.fa.kc("inline")}}class x{constructor(t){this.fa=t}get active(){return this.fa.I==="picture-in-picture"}get supported(){return this.fa.Se}async enter(){this.fa.kc("picture-in-picture")}async exit(){this.fa.kc("inline")}}class w{constructor(t,e){if(this.m=t,this.b=e,!this.supported)return;const i=["connecting","connect","disconnect"],s=this.Rg.bind(this);s(),n(t,"playing",s);for(const a of i)n(t.remote,a,s)}get supported(){return this.Se??(this.Se=!!this.m.remote&&this.sl)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.m.remote.prompt()}Rg(t){const e=this.m.remote.state;if(e===this.mc)return;const i={type:this.vb,state:e};this.b.delegate.c("remote-playback-change",i,t),this.mc=e}}class v extends w{constructor(){super(...arguments),this.vb="airplay"}get sl(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}class R extends f{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="VIDEO",p(()=>{if(this.airPlay=new v(t,e),h(t)){const i=new I(t,e);this.fullscreen=new T(i),this.pictureInPicture=new x(i)}else u(t)&&(this.pictureInPicture=new y(t,e))},this.scope)}get type(){return"video"}setup(){super.setup(),m(this.video)&&new b(this.video,this.b),this.b.textRenderers.Fe(this.video),l(()=>{this.b.textRenderers.Fe(null)}),this.type==="video"&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}export{R as VideoProvider};
