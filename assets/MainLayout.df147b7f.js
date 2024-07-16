import{Q as Ge,a as Je}from"./QBtn.c47bcf4f.js";import{c as V,a as d,h as S,i as pe,e as M,l as Z,r as _,w,o as be,g as I,b as Ze,d as R,n as Pe,f as et,j as Y,p as ue,k as xe,s as se,m as me,q as ce,t as tt,u as _e,v as Me,x as at,y as Ee,z as ot,A as nt,B as it,C as U,D as lt,E as Qe,F as G,G as he,H as $,I as L,J as rt,K as J,L as ke,M as ut,N as st,O as ct,P as dt}from"./index.87021aa6.js";import{h as ee,a as ft,b as Te,c as vt}from"./render.828f8657.js";import{Q as ge,g as Le,s as ze,c as mt,u as ht,a as gt,b as yt,d as pt,e as bt,f as wt,h as Ct,i as K,j as qt,k as St,l as xt,m as _t,n as de,o as kt,p as $e,q as ye,r as Tt}from"./QItem.7abde8cd.js";var Lt=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:u}){const n=d(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},ee(u.default))}}),zt=V({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:u}){const n=d(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},ee(u.default))}}),$t=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:u,emit:n}){const{proxy:{$q:l}}=I(),e=pe(Z,M);if(e===M)return console.error("QHeader needs to be child of QLayout"),M;const a=_(parseInt(t.heightHint,10)),s=_(!0),m=d(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||l.platform.is.ios&&e.isContainer.value===!0),h=d(()=>{if(t.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const c=a.value-e.scroll.value.position;return c>0?c:0}),r=d(()=>t.modelValue!==!0||m.value===!0&&s.value!==!0),i=d(()=>t.modelValue===!0&&r.value===!0&&t.reveal===!0),C=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),b=d(()=>{const c=e.rows.value.top,k={};return c[0]==="l"&&e.left.space===!0&&(k[l.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),c[2]==="r"&&e.right.space===!0&&(k[l.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),k});function f(c,k){e.update("header",c,k)}function v(c,k){c.value!==k&&(c.value=k)}function B({height:c}){v(a,c),f("size",c)}function x(c){i.value===!0&&v(s,!0),n("focusin",c)}w(()=>t.modelValue,c=>{f("space",c),v(s,!0),e.animate()}),w(h,c=>{f("offset",c)}),w(()=>t.reveal,c=>{c===!1&&v(s,t.modelValue)}),w(s,c=>{e.animate(),n("reveal",c)}),w(e.scroll,c=>{t.reveal===!0&&v(s,c.direction==="up"||c.position<=t.revealOffset||c.position-c.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&f("size",a.value),f("space",t.modelValue),f("offset",h.value),be(()=>{e.instances.header===p&&(e.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const c=ft(u.default,[]);return t.elevated===!0&&c.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(S(ge,{debounce:0,onResize:B})),S("header",{class:C.value,style:b.value,onFocusin:x},c)}}});function fe(t,u,n){const l=me(t);let e,a=l.left-u.event.x,s=l.top-u.event.y,m=Math.abs(a),h=Math.abs(s);const r=u.direction;r.horizontal===!0&&r.vertical!==!0?e=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?e=s<0?"up":"down":r.up===!0&&s<0?(e="up",m>h&&(r.left===!0&&a<0?e="left":r.right===!0&&a>0&&(e="right"))):r.down===!0&&s>0?(e="down",m>h&&(r.left===!0&&a<0?e="left":r.right===!0&&a>0&&(e="right"))):r.left===!0&&a<0?(e="left",m<h&&(r.up===!0&&s<0?e="up":r.down===!0&&s>0&&(e="down"))):r.right===!0&&a>0&&(e="right",m<h&&(r.up===!0&&s<0?e="up":r.down===!0&&s>0&&(e="down")));let i=!1;if(e===void 0&&n===!1){if(u.event.isFirst===!0||u.event.lastDir===void 0)return{};e=u.event.lastDir,i=!0,e==="left"||e==="right"?(l.left-=a,m=0,a=0):(l.top-=s,h=0,s=0)}return{synthetic:i,payload:{evt:t,touch:u.event.mouse!==!0,mouse:u.event.mouse===!0,position:l,direction:e,isFirst:u.event.isFirst,isFinal:n===!0,duration:Date.now()-u.event.time,distance:{x:m,y:h},offset:{x:a,y:s},delta:{x:l.left-u.event.lastX,y:l.top-u.event.lastY}}}}let Bt=0;var ve=Ze({name:"touch-pan",beforeMount(t,{value:u,modifiers:n}){if(n.mouse!==!0&&R.has.touch!==!0)return;function l(a,s){n.mouse===!0&&s===!0?tt(a):(n.stop===!0&&se(a),n.prevent===!0&&xe(a))}const e={uid:"qvtp_"+Bt++,handler:u,modifiers:n,direction:Le(n),noop:Pe,mouseStart(a){ze(a,e)&&et(a)&&(Y(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(ze(a,e)){const s=a.target;Y(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,s){if(R.is.firefox===!0&&ue(t,!0),e.lastEvt=a,s===!0||n.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&xe(r),a.cancelBubble===!0&&se(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:r}}se(a)}const{left:m,top:h}=me(a);e.event={x:m,y:h,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:h}},move(a){if(e.event===void 0)return;const s=me(a),m=s.left-e.event.x,h=s.top-e.event.y;if(m===0&&h===0)return;e.lastEvt=a;const r=e.event.mouse===!0,i=()=>{l(a,r);let f;n.preserveCursor!==!0&&n.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mt(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),r===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{B(),v()},50):B()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(a,e.event.mouse);const{payload:f,synthetic:v}=fe(a,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&i(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=v===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||r===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){i(),e.event.detected=!0,e.move(a);return}const C=Math.abs(m),b=Math.abs(h);C!==b&&(e.direction.horizontal===!0&&C>b||e.direction.vertical===!0&&C<b||e.direction.up===!0&&C<b&&h<0||e.direction.down===!0&&C<b&&h>0||e.direction.left===!0&&C>b&&m<0||e.direction.right===!0&&C>b&&m>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,s){if(e.event!==void 0){if(ce(e,"temp"),R.is.firefox===!0&&ue(t,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(fe(a===void 0?e.lastEvt:a,e).payload);const{payload:m}=fe(a===void 0?e.lastEvt:a,e,!0),h=()=>{e.handler(m)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";Y(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}R.has.touch===!0&&Y(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,u){const n=t.__qtouchpan;n!==void 0&&(u.oldValue!==u.value&&(typeof value!="function"&&n.end(),n.handler=u.value),n.direction=Le(u.modifiers))},beforeUnmount(t){const u=t.__qtouchpan;u!==void 0&&(u.event!==void 0&&u.end(),ce(u,"main"),ce(u,"temp"),R.is.firefox===!0&&ue(t,!1),u.styleCleanup!==void 0&&u.styleCleanup(),delete t.__qtouchpan)}});const Be=150;var Ot=V({name:"QDrawer",inheritAttrs:!1,props:{...ht,...gt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...yt,"onLayout","miniState"],setup(t,{slots:u,emit:n,attrs:l}){const e=I(),{proxy:{$q:a}}=e,s=pt(t,a),{preventBodyScroll:m}=qt(),{registerTimeout:h,removeTimeout:r}=bt(),i=pe(Z,M);if(i===M)return console.error("QDrawer needs to be child of QLayout"),M;let C,b=null,f;const v=_(t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint),B=d(()=>t.mini===!0&&v.value!==!0),x=d(()=>B.value===!0?t.miniWidth:t.width),p=_(t.showIfAbove===!0&&v.value===!1?!0:t.modelValue===!0),c=d(()=>t.persistent!==!0&&(v.value===!0||De.value===!0));function k(o,g){if(D(),o!==!1&&i.animate(),O(0),v.value===!0){const T=i.instances[j.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),E(1),i.isContainer.value!==!0&&m(!0)}else E(0),o!==!1&&ie(!1);h(()=>{o!==!1&&ie(!0),g!==!0&&n("show",o)},Be)}function y(o,g){A(),o!==!1&&i.animate(),E(0),O(F.value*x.value),le(),g!==!0?h(()=>{n("hide",o)},Be):r()}const{show:q,hide:z}=wt({showing:p,hideOnRouteChange:c,handleShow:k,handleHide:y}),{addToHistory:D,removeFromHistory:A}=Ct(p,z,c),H={belowBreakpoint:v,hide:z},P=d(()=>t.side==="right"),F=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),we=_(0),N=_(!1),te=_(!1),Ce=_(x.value*F.value),j=d(()=>P.value===!0?"left":"right"),ae=d(()=>p.value===!0&&v.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:x.value:0),oe=d(()=>t.overlay===!0||t.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")!==-1||a.platform.is.ios===!0&&i.isContainer.value===!0),W=d(()=>t.overlay===!1&&p.value===!0&&v.value===!1),De=d(()=>t.overlay===!0&&p.value===!0&&v.value===!1),He=d(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&N.value===!1?" hidden":"")),Ve=d(()=>({backgroundColor:`rgba(0,0,0,${we.value*.4})`})),qe=d(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Fe=d(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ne=d(()=>{const o={};return i.header.space===!0&&qe.value===!1&&(oe.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&Fe.value===!1&&(oe.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),Ae=d(()=>{const o={width:`${x.value}px`,transform:`translateX(${Ce.value}px)`};return v.value===!0?o:Object.assign(o,Ne.value)}),We=d(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Re=d(()=>`q-drawer q-drawer--${t.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(oe.value===!0||W.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(qe.value===!0?" q-drawer--top-padding":""))),Ie=d(()=>{const o=a.lang.rtl===!0?t.side:j.value;return[[ve,Ue,void 0,{[o]:!0,mouse:!0}]]}),je=d(()=>{const o=a.lang.rtl===!0?j.value:t.side;return[[ve,Se,void 0,{[o]:!0,mouse:!0}]]}),Xe=d(()=>{const o=a.lang.rtl===!0?j.value:t.side;return[[ve,Se,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){Ke(v,t.behavior==="mobile"||t.behavior!=="desktop"&&i.totalWidth.value<=t.breakpoint)}w(v,o=>{o===!0?(C=p.value,p.value===!0&&z(!1)):t.overlay===!1&&t.behavior!=="mobile"&&C!==!1&&(p.value===!0?(O(0),E(0),le()):q(!1))}),w(()=>t.side,(o,g)=>{i.instances[g]===H&&(i.instances[g]=void 0,i[g].space=!1,i[g].offset=0),i.instances[o]=H,i[o].size=x.value,i[o].space=W.value,i[o].offset=ae.value}),w(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),w(()=>t.behavior+t.breakpoint,ne),w(i.isContainer,o=>{p.value===!0&&m(o!==!0),o===!0&&ne()}),w(i.scrollbarWidth,()=>{O(p.value===!0?0:void 0)}),w(ae,o=>{Q("offset",o)}),w(W,o=>{n("onLayout",o),Q("space",o)}),w(P,()=>{O()}),w(x,o=>{O(),re(t.miniToOverlay,o)}),w(()=>t.miniToOverlay,o=>{re(o,x.value)}),w(()=>a.lang.rtl,()=>{O()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ye(),i.animate())}),w(B,o=>{n("miniState",o)});function O(o){o===void 0?_e(()=>{o=p.value===!0?0:x.value,O(F.value*o)}):(i.isContainer.value===!0&&P.value===!0&&(v.value===!0||Math.abs(o)===x.value)&&(o+=F.value*i.scrollbarWidth.value),Ce.value=o)}function E(o){we.value=o}function ie(o){const g=o===!0?"remove":i.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Ye(){b!==null&&clearTimeout(b),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,b=setTimeout(()=>{b=null,te.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ue(o){if(p.value!==!1)return;const g=x.value,T=K(o.distance.x,0,g);if(o.isFinal===!0){T>=Math.min(75,g)===!0?q():(i.animate(),E(0),O(F.value*g)),N.value=!1;return}O((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(g-T,0):Math.min(0,T-g)),E(K(T/g,0,1)),o.isFirst===!0&&(N.value=!0)}function Se(o){if(p.value!==!0)return;const g=x.value,T=o.direction===t.side,X=(a.lang.rtl===!0?T!==!0:T)?K(o.distance.x,0,g):0;if(o.isFinal===!0){Math.abs(X)<Math.min(75,g)===!0?(i.animate(),E(1),O(0)):z(),N.value=!1;return}O(F.value*X),E(K(1-X/g,0,1)),o.isFirst===!0&&(N.value=!0)}function le(){m(!1),ie(!0)}function Q(o,g){i.update(t.side,o,g)}function Ke(o,g){o.value!==g&&(o.value=g)}function re(o,g){Q("size",o===!0?t.miniWidth:g)}return i.instances[t.side]=H,re(t.miniToOverlay,x.value),Q("space",W.value),Q("offset",ae.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Me(()=>{n("onLayout",W.value),n("miniState",B.value),C=t.showIfAbove===!0;const o=()=>{(p.value===!0?k:y)(!1,!0)};if(i.totalWidth.value!==0){_e(o);return}f=w(i.totalWidth,()=>{f(),f=void 0,p.value===!1&&t.showIfAbove===!0&&v.value===!1?q(!1):o()})}),be(()=>{f!==void 0&&f(),b!==null&&(clearTimeout(b),b=null),p.value===!0&&le(),i.instances[t.side]===H&&(i.instances[t.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const o=[];v.value===!0&&(t.noSwipeOpen===!1&&o.push(at(S("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ie.value)),o.push(Te("div",{ref:"backdrop",class:He.value,style:Ve.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>Xe.value)));const g=B.value===!0&&u.mini!==void 0,T=[S("div",{...l,key:""+g,class:[We.value,l.class]},g===!0?u.mini():ee(u.default))];return t.elevated===!0&&p.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Te("aside",{ref:"content",class:Re.value,style:Ae.value},T,"contentclose",t.noSwipeClose!==!0&&v.value===!0,()=>je.value)),S("div",{class:"q-drawer-container"},o)}}}),Pt=V({name:"QPageContainer",setup(t,{slots:u}){const{proxy:{$q:n}}=I(),l=pe(Z,M);if(l===M)return console.error("QPageContainer needs to be child of QLayout"),M;Ee(ot,!0);const e=d(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:e.value},ee(u.default))}});const{passive:Oe}=nt,Mt=["both","horizontal","vertical"];var Et=V({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Mt.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:u}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,e,a;w(()=>t.scrollTarget,()=>{h(),m()});function s(){l!==null&&l();const C=Math.max(0,xt(e)),b=_t(e),f={top:C-n.position.top,left:b-n.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const v=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:C,left:b},n.directionChanged=n.direction!==v,n.delta=f,n.directionChanged===!0&&(n.direction=v,n.inflectionPoint=n.position),u("scroll",{...n})}function m(){e=St(a,t.scrollTarget),e.addEventListener("scroll",r,Oe),r(!0)}function h(){e!==void 0&&(e.removeEventListener("scroll",r,Oe),e=void 0)}function r(C){if(C===!0||t.debounce===0||t.debounce==="0")s();else if(l===null){const[b,f]=t.debounce?[setTimeout(s,t.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{f(b),l=null}}}const{proxy:i}=I();return w(()=>i.$q.lang.rtl,s),Me(()=>{a=i.$el.parentNode,m()}),be(()=>{l!==null&&l(),h()}),Object.assign(i,{trigger:r,getPosition:()=>n}),Pe}}),Qt=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:u,emit:n}){const{proxy:{$q:l}}=I(),e=_(null),a=_(l.screen.height),s=_(t.container===!0?0:l.screen.width),m=_({position:0,direction:"down",inflectionPoint:0}),h=_(0),r=_(it.value===!0?0:de()),i=d(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),C=d(()=>t.container===!1?{minHeight:l.screen.height+"px"}:null),b=d(()=>r.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),f=d(()=>r.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function v(y){if(t.container===!0||document.qScrollPrevented!==!0){const q={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};m.value=q,t.onScroll!==void 0&&n("scroll",q)}}function B(y){const{height:q,width:z}=y;let D=!1;a.value!==q&&(D=!0,a.value=q,t.onScrollHeight!==void 0&&n("scrollHeight",q),p()),s.value!==z&&(D=!0,s.value=z),D===!0&&t.onResize!==void 0&&n("resize",y)}function x({height:y}){h.value!==y&&(h.value=y,p())}function p(){if(t.container===!0){const y=a.value>h.value?de():0;r.value!==y&&(r.value=y)}}let c=null;const k={instances:{},view:d(()=>t.view),isContainer:d(()=>t.container),rootRef:e,height:a,containerHeight:h,scrollbarWidth:r,totalWidth:d(()=>s.value+r.value),rows:d(()=>{const y=t.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:m,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,q,z){k[y][q]=z}};if(Ee(Z,k),de()>0){let z=function(){y=null,q.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(q.scrollHeight>l.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},A=function(H){y!==null&&H==="remove"&&(clearTimeout(y),z()),window[`${H}EventListener`]("resize",D)},y=null;const q=document.body;w(()=>t.container!==!0?"add":"remove",A),t.container!==!0&&A("add"),lt(()=>{A("remove")})}return()=>{const y=vt(u.default,[S(Et,{onScroll:v}),S(ge,{onResize:B})]),q=S("div",{class:i.value,style:C.value,ref:t.container===!0?void 0:e,tabindex:-1},y);return t.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:e},[S(ge,{onResize:x}),S("div",{class:"absolute-full",style:b.value},[S("div",{class:"scroll",style:f.value},[q])])]):q}}});const Dt=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{info:Object},setup(t){const u=Qe(),n=()=>{u.push({name:l.info.routerName})},l=t;return(e,a)=>(G(),he(kt,{clickable:"",onClick:n},{default:$(()=>[l.info.icon?(G(),he($e,{key:0,avatar:""},{default:$(()=>[L(Ge,{color:"blue-8",name:l.info.icon},null,8,["name"])]),_:1})):rt("",!0),L($e,null,{default:$(()=>[L(ye,null,{default:$(()=>[J(ke(l.info.title),1)]),_:1}),L(ye,{caption:""},{default:$(()=>[J(ke(l.info.caption),1)]),_:1})]),_:1})]),_:1}))}}),Wt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(t){const u=Qe(),n=[{title:"\u57FA\u672C\u8A2D\u7F6E",caption:"\u7CFB\u7D71\u57FA\u672C\u8A2D\u7F6E",icon:"tune",routerName:"baseSetting"},{title:"\u6625\u65E5\u5C71\u7269\u8A9E\uFF1A\u7948\u9858\u306E\u77F3\u5361",caption:"\u6642\u5149\u8B80\u65C5\u5B98\u65B9\u81EA\u6709\u904A\u6232",icon:"style",routerName:"prayCard"},{title:"\u5F9E\u524D\u6709\u5EA7\u6625\u65E5\u5C71",caption:"\u6642\u5149\u8B80\u65C5\u5B98\u65B9\u81EA\u6709\u904A\u6232",icon:"landscape",routerName:"kasugayama"},{title:"\u7570\u754C\u5B78\u5E9C\uFF1A\u56DB\u66F8\u8B0E\u8E64",caption:"\u6642\u5149\u8B80\u65C5\u5B98\u65B9\u81EA\u6709\u904A\u6232",icon:"auto_awesome",routerName:"mbook"},{title:"\u5948\u826F\u306E\u8B0E\u89E3\u304D",caption:"\u65E5\u672C\u5948\u826F\u7684\u89E3\u8B0E\u904A\u6232",icon:"fas fa-torii-gate",routerName:"naradeer"},{title:"\u9B54\u6CD5\u63A2\u96AA\u5BB6",caption:"\u7BC4\u4F8B\u904A\u6232",icon:"fas fa-hat-wizard",routerName:"explorer"},{title:"\u6CB3\u795E\u8E05\u7720\u5922",caption:"\u904A\u5883\u611F\u77E5\u6240",icon:"fas fa-dragon",routerName:"river"}],l=_(!1);function e(){l.value=!l.value}const a=()=>{u.push({name:"index"})};return(s,m)=>{const h=ut("router-view");return G(),he(Qt,{view:"lHh Lpr lFf"},{default:$(()=>[L($t,{elevated:"",class:"bg-blue-grey-9"},{default:$(()=>[L(zt,null,{default:$(()=>[L(Je,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e}),L(Lt,{class:"cursor-pointer",onClick:a},{default:$(()=>[J(" \u6642\u5149\u8B80\u65C5\u7D20\u6750\u5EAB ")]),_:1})]),_:1})]),_:1}),L(Ot,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=r=>l.value=r),"show-if-above":"",bordered:""},{default:$(()=>[L(Tt,{separator:""},{default:$(()=>[L(ye,{header:""},{default:$(()=>[J(" \u7D20\u6750\u5EAB\u5217\u8868 ")]),_:1}),(G(),st(dt,null,ct(n,r=>L(Dt,{key:r.routerName,info:r},null,8,["info"])),64))]),_:1})]),_:1},8,["modelValue"]),L(Pt,{class:"bg-grey-3"},{default:$(()=>[L(h)]),_:1})]),_:1})}}});export{Wt as default};
