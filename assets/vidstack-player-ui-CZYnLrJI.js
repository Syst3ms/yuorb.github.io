import{Q as ns,H as a,R as ls,e as n,T as gs,u as p,S as os,U as ps,V as us,W as xs,X as ds,Y as Ns,Z as Hs,_ as Ts,$ as fs,a0 as Ls,a1 as bs,a2 as Cs,a3 as js,a4 as ys,a5 as $s,a6 as ks,a7 as vs,a8 as Us,a9 as qs,aa as ws,ab as Ss,ac as Os,s as o,ad as L,ae as rs,i as ut,af as hs,ag as ms,C as g,ah as As,ai as Xs,o as es,j as is,aj as cs,ak as Js,al as Ws,am as Ys,m as Zs,an as zs,g as Qs,c as Ds,ao as Fs,ap as Ks,aq as Vs,ar as Is,as as Rs,at as Ps,au as Bs,av as Gs,aw as Es,ax as _s,d as s}from"./vidstack-D1JzjGR7-BC7yGmt-.js";import{L as Ms,x as ta}from"./vidstack-CbhL8rpf-C0Lj70YY.js";import"./app-BuE3GfVs.js";class sa extends ns{}const N=class N extends a(HTMLElement,ls){constructor(){super(...arguments),this.Uj=document.createElement("img")}onSetup(){this.$state.img.set(this.Uj)}onConnect(){const{src:t,alt:e,crossOrigin:i}=this.$state;this.Uj.parentNode!==this&&this.prepend(this.Uj),n(()=>{o(this.Uj,"alt",e()),o(this.Uj,"crossorigin",i()),o(this.Uj,"src",t()||"")}),n(()=>{const{loading:c,hidden:r}=this.$state;this.Uj.style.display=c()||r()?"none":""})}};N.tagName="media-poster",N.attrs={crossOrigin:"crossorigin"};let C=N;const aa=ms('<img loading="eager" decoding="async" aria-hidden="true">'),H=class H extends a(HTMLElement,gs){constructor(){super(...arguments),this.Uj=this.gk()}onSetup(){this.a=p(),this.$state.img.set(this.Uj)}onConnect(){const{src:t,crossOrigin:e}=this.$state;this.Uj.parentNode!==this&&this.prepend(this.Uj),n(()=>{o(this.Uj,"src",t()),o(this.Uj,"crossorigin",e())})}gk(){return os(aa)}};H.tagName="media-thumbnail",H.attrs={crossOrigin:"crossorigin"};let d=H;const xt=class xt extends a(HTMLElement,ps){onConnect(){n(()=>{this.textContent=this.$state.timeText()})}};xt.tagName="media-time";let j=xt;const dt=class dt extends a(HTMLElement,us){};dt.tagName="media-airplay-button";let y=dt;const Nt=class Nt extends a(HTMLElement,xs){};Nt.tagName="media-caption-button";let $=Nt;const Ht=class Ht extends a(HTMLElement,ds){};Ht.tagName="media-fullscreen-button";let k=Ht;const Tt=class Tt extends a(HTMLElement,Ns){};Tt.tagName="media-live-button";let v=Tt;const ft=class ft extends a(HTMLElement,Hs){};ft.tagName="media-mute-button";let U=ft;const Lt=class Lt extends a(HTMLElement,Ts){};Lt.tagName="media-pip-button";let q=Lt;const bt=class bt extends a(HTMLElement,fs){};bt.tagName="media-play-button";let w=bt;const Ct=class Ct extends a(HTMLElement,Ls){};Ct.tagName="media-seek-button";let S=Ct;function u(m,t){L(()=>{if(!m.connectScope)return;const e=m.querySelector("template");e&&n(()=>{const i=m.getOptions();rs(e,i.length,(c,r)=>{const{label:h,value:x}=i[r],l=c.querySelector('[data-part="label"]');c.setAttribute("value",x),l&&(ut(h)?l.textContent=h:n(()=>{l.textContent=h()})),t==null||t(c,i[r],r)})})})}const jt=class jt extends a(HTMLElement,bs){onConnect(){u(this)}};jt.tagName="media-audio-radio-group";let O=jt;const yt=class yt extends a(HTMLElement,Cs){onConnect(){u(this)}};yt.tagName="media-captions-radio-group";let A=yt;const $t=class $t extends a(HTMLElement,js){};$t.tagName="media-menu";let X=$t;const kt=class kt extends a(HTMLElement,ns){};kt.tagName="media-menu-button";let J=kt;const vt=class vt extends a(HTMLElement,sa){};vt.tagName="media-menu-item";let W=vt;const Ut=class Ut extends a(HTMLElement,ys){};Ut.tagName="media-menu-items";let Y=Ut;const qt=class qt extends a(HTMLElement,$s){onConnect(){u(this)}};qt.tagName="media-speed-radio-group";let Z=qt;const wt=class wt extends a(HTMLElement,ks){onConnect(){u(this,(t,e)=>{const i=e.bitrate,c=t.querySelector('[data-part="bitrate"]');i&&c&&n(()=>{c.textContent=i()||""})})}};wt.tagName="media-quality-radio-group";let z=wt;const St=class St extends d{onSetup(){super.onSetup(),this.Q=vs(hs.state)}onConnect(){super.onConnect(),n(this.ag.bind(this))}ag(){const{duration:t,clipStartTime:e}=this.a.$state;this.time=e()+this.Q.pointerRate()*t()}};St.tagName="media-slider-thumbnail";let Q=St;const T=class T extends a(HTMLElement,Us){onConnect(){n(()=>{this.textContent=this.getValueText()})}};T.tagName="media-slider-value",T.attrs={padMinutes:{converter:qs}};let D=T;const Ot=class Ot extends a(HTMLElement,ws){};Ot.tagName="media-time-slider";let F=Ot;const At=class At extends a(HTMLElement,Ss){};At.tagName="media-slider-preview";let K=At;const Xt=class Xt extends a(HTMLElement,Os){};Xt.tagName="media-volume-slider";let V=Xt;class ea extends g{onAttach(t){t.style.pointerEvents||As(t,"pointer-events","auto")}}class ia extends g{constructor(){super(),new Xs}onConnect(t){es(L(()=>{if(!this.connectScope)return;this.Ja();const e=is(cs);es(()=>{const i=this.Cc();i&&e.Kd(i)})}))}Ja(){const t=this.Cc(),e=is(cs);t&&e.Jd(t)}Cc(){const t=this.el.firstElementChild;return(t==null?void 0:t.localName)==="button"||(t==null?void 0:t.getAttribute("role"))==="button"?t:this.el}}const Jt=class Jt extends a(HTMLElement,Js){};Jt.tagName="media-captions";let I=Jt;const Wt=class Wt extends a(HTMLElement,Ws){};Wt.tagName="media-gesture";let R=Wt;const Yt=class Yt extends a(HTMLElement,Ys){};Yt.tagName="media-controls";let P=Yt;const Zt=class Zt extends a(HTMLElement,ea){};Zt.tagName="media-controls-group";let B=Zt;class ca extends g{}const zt=class zt extends a(HTMLElement,ca){onSetup(){this.a=p()}onConnect(){n(this.uc.bind(this))}uc(){const{title:t}=this.a.$state;this.textContent=t()}};zt.tagName="media-title";let G=zt;class na extends g{}const Qt=class Qt extends a(HTMLElement,na){onSetup(){this.a=p(),this.Xj=Zs("")}onConnect(){const t=this.a.textTracks;zs(t,"chapters",this.Xj.set),n(()=>{this.textContent=this.Xj()})}};Qt.tagName="media-chapter-title";let E=Qt;const Dt=class Dt extends g{onConnect(t){L(()=>{if(!this.connectScope)return;const e=t.querySelector("svg"),i=e.firstElementChild,c=i.nextElementSibling;n(this.ea.bind(this,e,i,c))})}ea(t,e,i){const{size:c,trackWidth:r,fillPercent:h}=this.$props;o(t,"width",c()),o(t,"height",c()),o(e,"stroke-width",r()),o(i,"stroke-width",r()),o(i,"stroke-dashoffset",100-h())}};Dt.props={size:96,trackWidth:8,fillPercent:50};let _=Dt;const Ft=class Ft extends a(Ms,_){render(){return ta`
      <svg fill="none" viewBox="0 0 120 120" aria-hidden="true" data-part="root">
        <circle cx="60" cy="60" r="54" stroke="currentColor" data-part="track"></circle>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
          stroke-dasharray="100"
          data-part="track-fill"
        ></circle>
      </svg>
    `}};Ft.tagName="media-spinner";let M=Ft;const Kt=class Kt extends g{};Kt.props={when:!1};let tt=Kt;const Vt=class Vt extends a(HTMLElement,tt){onSetup(){this.a=p()}onConnect(){n(this.Zm.bind(this))}Zm(){const t=this.firstElementChild,e=(t==null?void 0:t.localName)==="template",i=t instanceof HTMLElement,c=this.$props.when();if(!(Qs(c)?c:Ds(()=>c(this.a.player.state))())){e?(this.textContent="",this.appendChild(t)):i&&(t.style.display="none");return}e?this.append(t.content.cloneNode(!0)):i&&(t.style.display="")}};Vt.tagName="media-layout";let st=Vt;const It=class It extends a(HTMLElement,Fs){};It.tagName="media-google-cast-button";let at=It;const Rt=class Rt extends a(HTMLElement,Ks){};Rt.tagName="media-toggle-button";let et=Rt;const Pt=class Pt extends a(HTMLElement,Vs){};Pt.tagName="media-tooltip";let it=Pt;const Bt=class Bt extends a(HTMLElement,ia){onConnect(){this.style.display="contents"}};Bt.tagName="media-tooltip-trigger";let ct=Bt;const Gt=class Gt extends a(HTMLElement,Is){};Gt.tagName="media-tooltip-content";let nt=Gt;const f=class f extends a(HTMLElement,Rs){};f.tagName="media-menu-portal",f.attrs={disabled:{converter(t){return ut(t)?t:t!==null}}};let ot=f;const Et=class Et extends a(HTMLElement,Ps){onConnect(){u(this,(t,e)=>{const{cue:i,startTime:c,duration:r}=e,h=t.querySelector(".vds-thumbnail,media-thumbnail"),x=t.querySelector('[data-part="start-time"]'),l=t.querySelector('[data-part="duration"]');x&&(x.textContent=c),l&&(l.textContent=r),h&&(h.setAttribute("time",i.startTime+""),n(()=>{const b=this.$props.thumbnails();"src"in h?h.src=b:ut(b)&&h.setAttribute("src",b)}))})}};Et.tagName="media-chapters-radio-group";let rt=Et;const _t=class _t extends a(HTMLElement,Bs){};_t.tagName="media-radio";let ht=_t;const Mt=class Mt extends a(HTMLElement,Gs){};Mt.tagName="media-radio-group";let mt=Mt;const ts=class ts extends a(HTMLElement,hs){};ts.tagName="media-slider";let lt=ts;const oa=ms('<video muted playsinline preload="none" style="max-width: unset;"></video>'),ss=class ss extends a(HTMLElement,Es){constructor(){super(...arguments),this.m=this.Yj()}onSetup(){this.a=p(),this.$state.video.set(this.m)}onConnect(){const{canLoad:t}=this.a.$state,{src:e,crossOrigin:i}=this.$state;this.m.parentNode!==this&&this.prepend(this.m),n(()=>{o(this.m,"crossorigin",i()),o(this.m,"preload",t()?"auto":"none"),o(this.m,"src",e())})}Yj(){return os(oa)}};ss.tagName="media-slider-video";let gt=ss;const as=class as extends a(HTMLElement,_s){constructor(){super(...arguments),this.$j=null}onConnect(){L(()=>{if(!this.connectScope)return;const t=this.querySelector("template");t&&(this.$j=t,n(this.jk.bind(this)))})}jk(){if(!this.$j)return;const t=rs(this.$j,this.cues.length||1);this.setRefs(t)}};as.tagName="media-slider-chapters";let pt=as;s(st);s(P);s(B);s(C);s(it);s(ct);s(nt);s(w);s(U);s($);s(k);s(q);s(S);s(y);s(at);s(et);s(lt);s(V);s(F);s(pt);s(K);s(D);s(Q);s(gt);s(X);s(J);s(ot);s(Y);s(W);s(O);s(A);s(Z);s(z);s(rt);s(mt);s(ht);s(R);s(d);s(I);s(v);s(j);s(G);s(E);s(M);
