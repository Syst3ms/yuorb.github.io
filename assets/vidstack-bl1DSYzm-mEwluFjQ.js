import{f as n,k as a,l as c,e as d,p as h,g as u}from"./vidstack-iVChOPoI-jn5iU3Z9.js";import{Y as l}from"./vidstack-ebJdpDfl-ORQDBbuh.js";function p(e,t=3e3){const s=n();return setTimeout(()=>{const i=e();i&&s.reject(i)},t),s}class g{constructor(t){this.db=t,this.cb=a(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),this.referrerPolicy!==null&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.db}setup(){c(window,"message",this.Lg.bind(this)),c(this.db,"load",this.lc.bind(this)),d(this.fd.bind(this))}fd(){const t=this.cb();if(!t.length){this.db.setAttribute("src","");return}const s=h(()=>this.Te());this.db.setAttribute("src",l(t,s))}gd(t,s){var i;(i=this.db.contentWindow)==null||i.postMessage(JSON.stringify(t),s??"*")}Lg(t){var o;const s=this.eb();if((t.source===null||t.source===((o=this.db)==null?void 0:o.contentWindow))&&(!u(s)||s===t.origin)){try{const r=JSON.parse(t.data);r&&this.hd(r,t);return}catch{}t.data&&this.hd(t.data,t)}}}export{g as E,p as t};
