import{p as M,d as _,s as R}from"./styles-6860f46c-DyTa0VYQ.js";import{l as d,c,h as w,y as B,t as G,p as D,r as E,o as C,j as A}from"./mermaid.core-txguF9Jt.js";import{G as z}from"./graph-leCm1FcT.js";import{r as P}from"./index-8fae9850-Bku2lKDU.js";import"./layout-CgCko7oE.js";import"./app-JFGvG28k.js";import"./clone-QR69yF7Z.js";import"./edges-d417c7a0-CxDw0Ms-.js";import"./createText-423428c9-CrGM1ZBM.js";import"./line-DnB_2OsZ.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const S=s=>A.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,t,y,a){const e=Object.keys(s);d.info("keys:",e),d.info(s),e.forEach(function(i){var o,r;const l=s[i],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(l.id,p),$(l.classes,t,y,a,l.id),d.info("setNode",p)})},$=function(s,t,y,a,e){const i=Object.keys(s);d.info("keys:",i),d.info(s),i.filter(o=>s[o].parent==e).forEach(function(o){var r,l;const n=s[o],p=n.cssClasses.join(" "),f=D(n.styles),h=n.label??n.id,u=0,b={labelStyle:f.labelStyle,shape:"class_box",labelText:S(h),classData:n,rx:u,ry:u,class:p,style:f.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,e)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};t.setNode(n.id,b),e&&t.setParent(n.id,e),d.info("setNode",b)})},F=function(s,t,y,a){d.info(s),s.forEach(function(e,i){var o,r;const l=e,n="",p={labelStyle:"",style:""},f=l.text,h=0,m={labelStyle:p.labelStyle,shape:"note",labelText:S(f),noteData:l,rx:h,ry:h,class:n,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(l.id,m),d.info("setNode",m),!l.class||!(l.class in a))return;const b=y+i,x={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:E(k.curve,C)};t.setEdge(l.id,l.class,x,b)})},H=function(s,t){const y=c().flowchart;let a=0;s.forEach(function(e){var i;a++;const o={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:`id_${e.id1}_${e.id2}_${a}`,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:N(e.relation.type1),arrowTypeEnd:N(e.relation.type2),style:"fill:none",labelStyle:"",curve:E(y==null?void 0:y.curve,C)};if(d.info(o,e),e.style!==void 0){const r=D(e.style);o.style=r.style,o.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+e.text+"</span>"):(o.labelType="text",o.label=e.text.replace(A.lineBreakRegex,`
`),e.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,o,a)})},V=function(s){k={...k,...s}},W=async function(s,t,y,a){d.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;d.info("config:",e);const o=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),p=a.db.getClasses(),f=a.db.getRelations(),h=a.db.getNotes();d.info(f),q(n,l,t,a),$(p,l,t,a),H(f,l),F(h,l,f.length+1,p);let u;i==="sandbox"&&(u=w("#i"+t));const m=i==="sandbox"?w(u.nodes()[0].contentDocument.body):w("body"),b=m.select(`[id="${t}"]`),x=m.select("#"+t+" g");if(await P(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),B.insertTitle(b,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,a.db.getDiagramTitle()),G(l,b,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?u.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function N(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const J={setConf:V,draw:W},se={parser:M,db:_,renderer:J,styles:R,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{se as diagram};
