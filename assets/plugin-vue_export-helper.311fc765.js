import{c as p,i,e as a,l as h,z as d,a as c,h as f,g as y}from"./index.3472336e.js";import{h as v}from"./render.21023ae0.js";var Q=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:r}){const{proxy:{$q:n}}=y(),e=i(h,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(i(d,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const u=c(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const g=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(o,g)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),l=c(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:l.value,style:u.value},v(r.default))}}),x=(t,r)=>{const n=t.__vccOpts||t;for(const[e,s]of r)n[e]=s;return n};export{Q,x as _};
