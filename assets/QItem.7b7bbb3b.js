import{r as M,B as ee,v as z,c as k,o as H,n as te,u as V,h as g,g as E,A as b,a as v,S as D,w as I,d as w,t as F,U as oe,V as le,W as ie,R as ne}from"./index.c5538db4.js";import{h as O,a as re}from"./render.be403ffa.js";import{v as se,g as ae,c as Q,b as ue,u as de,d as ce}from"./QBtn.5a447d44.js";function fe(){const e=M(!ee.value);return e.value===!1&&z(()=>{e.value=!0}),{isHydrated:e}}const G=typeof ResizeObserver!="undefined",$=G===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=k({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o=null,l,i={width:-1,height:-1};function f(s){s===!0||e.debounce===0||e.debounce==="0"?a():o===null&&(o=setTimeout(a,e.debounce))}function a(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:s,offsetHeight:u}=l;(s!==i.width||u!==i.height)&&(i={width:s,height:u},t("resize",i))}}const{proxy:c}=E();if(c.trigger=f,G===!0){let s;const u=d=>{l=c.$el.parentNode,l?(s=new ResizeObserver(f),s.observe(l),a()):d!==!0&&V(()=>{u(!0)})};return z(()=>{u()}),H(()=>{o!==null&&clearTimeout(o),s!==void 0&&(s.disconnect!==void 0?s.disconnect():l&&s.unobserve(l))}),te}else{let d=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",f,b.passive),u=void 0)},m=function(){d(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",f,b.passive),a())};const{isHydrated:s}=fe();let u;return z(()=>{V(()=>{l=c.$el,l&&m()})}),H(d),()=>{if(s.value===!0)return g("object",{class:"q--avoid-card-border",style:$.style,tabindex:-1,type:"text/html",data:$.url,"aria-hidden":"true",onLoad:m})}}}}),Se=k({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),i=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>g("div",{style:i.value,class:l.value},O(t.default))}});const J={dark:{type:Boolean,default:null}};function Z(e,t){return v(()=>e.dark===null?t.dark.isActive:e.dark)}var xe=k({name:"QList",props:{...J,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=E(),l=Z(e,o.proxy.$q),i=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>g(e.tag,{class:i.value},O(t.default))}});function Be(e,t,o){let l;function i(){l!==void 0&&(D.remove(l),l=void 0)}return H(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>o.value===!0,handler:t},D.add(l)}}}const Ce={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},_e=["beforeShow","show","beforeHide","hide"];function ze({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:i,processOnMount:f}){const a=E(),{props:c,emit:s,proxy:u}=a;let d;function m(n){e.value===!0?q(n):y(n)}function y(n){if(c.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const r=c["onUpdate:modelValue"]!==void 0;r===!0&&(s("update:modelValue",!0),d=n,V(()=>{d===n&&(d=void 0)})),(c.modelValue===null||r===!1)&&p(n)}function p(n){e.value!==!0&&(e.value=!0,s("beforeShow",n),l!==void 0?l(n):s("show",n))}function q(n){if(c.disable===!0)return;const r=c["onUpdate:modelValue"]!==void 0;r===!0&&(s("update:modelValue",!1),d=n,V(()=>{d===n&&(d=void 0)})),(c.modelValue===null||r===!1)&&S(n)}function S(n){e.value!==!1&&(e.value=!1,s("beforeHide",n),i!==void 0?i(n):s("hide",n))}function x(n){c.disable===!0&&n===!0?c["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):n===!0!==e.value&&(n===!0?p:S)(d)}I(()=>c.modelValue,x),o!==void 0&&se(a)===!0&&I(()=>u.$route.fullPath,()=>{o.value===!0&&e.value===!0&&q()}),f===!0&&z(()=>{x(c.modelValue)});const B={show:y,hide:q,toggle:m};return Object.assign(u,B),B}const ve=[null,document,document.body,document.scrollingElement,document.documentElement];function He(e,t){let o=ae(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ve.includes(o)?window:o}function me(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function be(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let C;function Ve(){if(C!==void 0)return C;const e=document.createElement("p"),t=document.createElement("div");Q(e,{width:"100%",height:"200px"}),Q(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),C=o-l,C}function pe(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let L=0,P,R,T,A=!1,U,j,X,h=null;function he(e){we(e)&&F(e)}function we(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=oe(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||l?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const a=t[f];if(pe(a,l))return l?i<0&&a.scrollTop===0?!0:i>0&&a.scrollTop+a.clientHeight===a.scrollHeight:i<0&&a.scrollLeft===0?!0:i>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function Y(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){A!==!0&&(A=!0,requestAnimationFrame(()=>{A=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(T===void 0||t!==window.innerHeight)&&(T=o-t,document.scrollingElement.scrollTop=l),l>T&&(document.scrollingElement.scrollTop-=Math.ceil((l-T)/8))}))}function K(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(t);P=be(window),R=me(window),U=t.style.left,j=t.style.top,X=window.location.href,t.style.left=`-${P}px`,t.style.top=`-${R}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,b.passiveCapture),window.visualViewport.addEventListener("scroll",_,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Y,b.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",he,b.notPassive),e==="remove"&&(w.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",_,b.passiveCapture),window.visualViewport.removeEventListener("scroll",_,b.passiveCapture)):window.removeEventListener("scroll",Y,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=U,t.style.top=j,window.location.href===X&&window.scrollTo(P,R),T=void 0)}function ge(e){let t="add";if(e===!0){if(L++,h!==null){clearTimeout(h),h=null;return}if(L>1)return}else{if(L===0||(L--,L>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){h!==null&&clearTimeout(h),h=setTimeout(()=>{K(t),h=null},100);return}}K(t)}function Pe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ge(t))}}}function Re(){let e=null;const t=E();function o(){e!==null&&(clearTimeout(e),e=null)}return le(o),H(o),{removeTimeout:o,registerTimeout(l,i){o(),ue(t)===!1&&(e=setTimeout(()=>{e=null,l()},i))}}}const W={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ye=Object.keys(W);W.all=!0;function Ae(e){const t={};for(const o of ye)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?W:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const qe=["INPUT","TEXTAREA"];function Me(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&qe.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Oe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ie.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function We(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Ne(e,t,o){if(o<=t)return t;const l=o-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}var De=k({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:o.value},O(t.default))}}),Ie=k({name:"QItem",props:{...J,...de,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=E(),i=Z(e,l),{hasLink:f,linkAttrs:a,linkClass:c,linkTag:s,navigateOnClick:u}=ce(),d=M(null),m=M(null),y=v(()=>e.clickable===!0||f.value===!0||e.tag==="label"),p=v(()=>e.disable!==!0&&y.value===!0),q=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=v(()=>{if(e.insetLevel===void 0)return null;const r=l.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function x(r){p.value===!0&&(m.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===d.value?m.value.focus():document.activeElement===m.value&&d.value.focus()),u(r))}function B(r){if(p.value===!0&&ne(r,[13,32])===!0){F(r),r.qKeyEvent=!0;const N=new MouseEvent("click",r);N.qKeyEvent=!0,d.value.dispatchEvent(N)}o("keyup",r)}function n(){const r=re(t.default,[]);return p.value===!0&&r.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:m})),r}return()=>{const r={ref:d,class:q.value,style:S.value,role:"listitem",onClick:x,onKeyup:B};return p.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,a.value)):y.value===!0&&(r["aria-disabled"]="true"),g(s.value,r,n())}}});export{Ee as Q,J as a,_e as b,Oe as c,Z as d,Re as e,ze as f,Ae as g,Be as h,We as i,Pe as j,He as k,me as l,be as m,Ve as n,Ie as o,De as p,Se as q,xe as r,Me as s,Ne as t,Ce as u};
