import{Q as r,a as S,b as p,c as V,d as f,e as v,f as u,g as o,h as I}from"./copy-to-clipboard.658ea0ab.js";import{a as y,Q as n}from"./QBtn.566afdc1.js";import{_ as T,Q as P}from"./plugin-vue_export-helper.e994236c.js";import{r as m,a as R,v as B,F as D,G as N,H as a,Z as l,I as e,L as w,_ as j,X as F,Y as G}from"./index.45f341c3.js";import"./render.5d3c2905.js";import"./QItem.b3ca2dd3.js";const _=b=>(F("data-v-22dd8274"),b=b(),G(),b),H={class:"q-pa-xl page-wrap"},L={class:"q-mb-lg"},M=_(()=>l("div",{class:"text-h4"},"\u5F9E\u524D\u6709\u5EA7\u6625\u65E5\u5C71",-1)),X={class:"col-12 col-sm-4 col-md-3 col-lg-2"},Y={style:{"font-size":"16px"},class:"ellipsis"},Z={class:"row flex-center full-width",style:{height:"100px"}},A=_(()=>l("span",{class:"text-h6 text-blue-grey-5"}," \u54CE\u5440\uFF0C\u76EE\u524D\u9084\u6C92\u6709\u4EFB\u4F55\u6A94\u6848\u5537~! ",-1)),E={class:"col-12 col-sm-4 col-md-3 col-lg-2"},J={style:{"font-size":"16px"},class:"ellipsis"},K={class:"row flex-center full-width",style:{height:"100px"}},O=_(()=>l("span",{class:"text-h6 text-blue-grey-5"}," \u54CE\u5440\uFF0C\u76EE\u524D\u9084\u6C92\u6709\u4EFB\u4F55\u6A94\u6848\u5537~! ",-1)),W={class:"col-12 col-sm-4 col-md-3 col-lg-2"},ee={style:{"font-size":"16px"},class:"ellipsis"},ae={class:"row flex-center full-width",style:{height:"100px"}},se=_(()=>l("span",{class:"text-h6 text-blue-grey-5"}," \u54CE\u5440\uFF0C\u76EE\u524D\u9084\u6C92\u6709\u4EFB\u4F55\u6A94\u6848\u5537~! ",-1)),le={class:"col-12 col-sm-4 col-md-3 col-lg-2"},te={style:{"font-size":"16px"},class:"ellipsis"},oe={class:"row flex-center full-width",style:{height:"100px"}},ie=_(()=>l("span",{class:"text-h6 text-blue-grey-5"}," \u54CE\u5440\uFF0C\u76EE\u524D\u9084\u6C92\u6709\u4EFB\u4F55\u6A94\u6848\u5537~! ",-1)),ne={class:"col-12 col-sm-4 col-md-3 col-lg-2"},de={style:{"font-size":"16px"},class:"ellipsis"},re={class:"row flex-center full-width",style:{height:"100px"}},me=_(()=>l("span",{class:"text-h6 text-blue-grey-5"}," \u54CE\u5440\uFF0C\u76EE\u524D\u9084\u6C92\u6709\u4EFB\u4F55\u6A94\u6848\u5537~! ",-1)),ce={__name:"kasugayama",setup(b){const x=m("images"),i=m({rowsPerPage:0}),h=m([]),q=m([]),k=m([]),C=m([]),z=m([]),$=R(()=>{let d=location.origin,t=location.pathname;return`${d}${t}/`}),g=d=>{let t=location.origin,s=location.pathname;I(`${t}${s}${d}`).then(()=>alertSuccess("\u7DB2\u5740\u5DF2\u8907\u88FD",`${t}${s}${d}`)).catch(()=>{})};return B(()=>{let d=setkasugayama(),{image:t,armark:s,armodel:c,music:Q,video:U}=d;h.value=t,q.value=s,k.value=c,C.value=Q,z.value=U}),(d,t)=>(D(),N(P,null,{default:a(()=>[l("section",H,[l("section",L,[M,e(r,{class:"bg-blue-grey-9 q-mt-sm",style:{"padding-top":"2px"}})]),e(u,{flat:"",bordered:""},{default:a(()=>[e(S,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=s=>x.value=s),"outside-arrows":"","mobile-arrows":"","inline-label":"",align:"justify"},{default:a(()=>[e(p,{name:"images",icon:"images",i:"",label:"\u5716\u50CF\u6A94\u6848"}),e(p,{name:"armark",icon:"my_location",i:"",label:"\u6A19\u8A18\u6A94"}),e(p,{name:"music",icon:"music_note",i:"",label:"\u97F3\u6A02\u6A94\u6848"}),e(p,{name:"video",icon:"movie",i:"",label:"\u5F71\u7247\u6A94\u6848"}),e(p,{name:"armodel",icon:"view_in_ar",i:"",label:"3D\u6A21\u578B\u6A94"})]),_:1},8,["modelValue"]),e(r),e(V,{modelValue:x.value,"onUpdate:modelValue":t[6]||(t[6]=s=>x.value=s)},{default:a(()=>[e(f,{name:"images"},{default:a(()=>[e(v,{rows:h.value,"row-key":"name","rows-per-page-options":[0],pagination:i.value,"onUpdate:pagination":t[1]||(t[1]=s=>i.value=s),grid:""},{item:a(s=>[l("div",X,[e(u,{bordered:"",flat:"",class:"q-ma-sm bg-grey-3"},{default:a(()=>[e(o,{class:"bg-grey-10 text-white q-py-xs q-pl-sm"},{default:a(()=>[l("div",Y,w(s.row.name||"\u672A\u547D\u540D"),1)]),_:2},1024),e(o,{class:"q-pa-xs imgcard"},{default:a(()=>[l("div",{class:"imgItem",style:j(`background-image: url('${$.value}${s.row.file}')`)},null,4)]),_:2},1024),e(r),e(o,{class:"q-pa-sm"},{default:a(()=>[e(y,{unelevated:"",class:"full-width",color:"grey-9",onClick:c=>g(s.row.file),label:"\u8907\u88FD\u9023\u7D50"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[l("div",Z,[e(n,{size:"md",color:"blue-grey-5 q-mr-sm",name:"sentiment_very_dissatisfied"}),A])]),_:1},8,["rows","pagination"])]),_:1}),e(f,{name:"armark"},{default:a(()=>[e(v,{rows:q.value,"row-key":"name","rows-per-page-options":[0],pagination:i.value,"onUpdate:pagination":t[2]||(t[2]=s=>i.value=s),grid:""},{item:a(s=>[l("div",E,[e(u,{bordered:"",flat:"",class:"q-ma-sm bg-grey-3"},{default:a(()=>[e(o,{class:"bg-grey-10 text-white q-py-xs q-pl-sm"},{default:a(()=>[l("div",J,w(s.row.name||"\u672A\u547D\u540D"),1)]),_:2},1024),e(o,{class:"q-pa-xs mediaCard"},{default:a(()=>[e(n,{name:"my_location",size:"xl",class:"q-ma-lg"})]),_:1}),e(r),e(o,{class:"q-pa-sm"},{default:a(()=>[e(y,{unelevated:"",class:"full-width",color:"grey-9",onClick:c=>g(s.row.file),label:"\u8907\u88FD\u9023\u7D50"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[l("div",K,[e(n,{size:"md",color:"blue-grey-5 q-mr-sm",name:"sentiment_very_dissatisfied"}),O])]),_:1},8,["rows","pagination"])]),_:1}),e(f,{name:"music"},{default:a(()=>[e(v,{rows:C.value,"row-key":"name","rows-per-page-options":[0],pagination:i.value,"onUpdate:pagination":t[3]||(t[3]=s=>i.value=s),grid:""},{item:a(s=>[l("div",W,[e(u,{bordered:"",flat:"",class:"q-ma-sm bg-grey-3"},{default:a(()=>[e(o,{class:"bg-grey-10 text-white q-py-xs q-pl-sm"},{default:a(()=>[l("div",ee,w(s.row.name||"\u672A\u547D\u540D"),1)]),_:2},1024),e(o,{class:"q-pa-xs mediaCard"},{default:a(()=>[e(n,{name:"music_note",size:"xl",class:"q-ma-lg"})]),_:1}),e(r),e(o,{class:"q-pa-sm"},{default:a(()=>[e(y,{unelevated:"",class:"full-width",color:"grey-9",onClick:c=>g(s.row.file),label:"\u8907\u88FD\u9023\u7D50"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[l("div",ae,[e(n,{size:"md",color:"blue-grey-5 q-mr-sm",name:"sentiment_very_dissatisfied"}),se])]),_:1},8,["rows","pagination"])]),_:1}),e(f,{name:"video"},{default:a(()=>[e(v,{rows:z.value,"row-key":"name","rows-per-page-options":[0],pagination:i.value,"onUpdate:pagination":t[4]||(t[4]=s=>i.value=s),grid:""},{item:a(s=>[l("div",le,[e(u,{bordered:"",flat:"",class:"q-ma-sm bg-grey-3"},{default:a(()=>[e(o,{class:"bg-grey-10 text-white q-py-xs q-pl-sm"},{default:a(()=>[l("div",te,w(s.row.name||"\u672A\u547D\u540D"),1)]),_:2},1024),e(o,{class:"q-pa-xs mediaCard"},{default:a(()=>[e(n,{name:"movie",size:"xl",class:"q-ma-lg"})]),_:1}),e(r),e(o,{class:"q-pa-sm"},{default:a(()=>[e(y,{unelevated:"",class:"full-width",color:"grey-9",onClick:c=>g(s.row.file),label:"\u8907\u88FD\u9023\u7D50"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[l("div",oe,[e(n,{size:"md",color:"blue-grey-5 q-mr-sm",name:"sentiment_very_dissatisfied"}),ie])]),_:1},8,["rows","pagination"])]),_:1}),e(f,{name:"armodel"},{default:a(()=>[e(v,{rows:k.value,"row-key":"name","rows-per-page-options":[0],pagination:i.value,"onUpdate:pagination":t[5]||(t[5]=s=>i.value=s),grid:""},{item:a(s=>[l("div",ne,[e(u,{bordered:"",flat:"",class:"q-ma-sm bg-grey-3"},{default:a(()=>[e(o,{class:"bg-grey-10 text-white q-py-xs q-pl-sm"},{default:a(()=>[l("div",de,w(s.row.name||"\u672A\u547D\u540D"),1)]),_:2},1024),e(o,{class:"q-pa-xs mediaCard"},{default:a(()=>[e(n,{name:"view_in_ar",size:"xl",class:"q-ma-lg"})]),_:1}),e(r),e(o,{class:"q-pa-sm"},{default:a(()=>[e(y,{unelevated:"",class:"full-width",color:"grey-9",onClick:c=>g(s.row.file),label:"\u8907\u88FD\u9023\u7D50"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])]),"no-data":a(()=>[l("div",re,[e(n,{size:"md",color:"blue-grey-5 q-mr-sm",name:"sentiment_very_dissatisfied"}),me])]),_:1},8,["rows","pagination"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}))}};var ye=T(ce,[["__scopeId","data-v-22dd8274"]]);export{ye as default};