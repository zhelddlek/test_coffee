(function(){"use strict";var e={170:function(e,t,o){var n=o(963),a=o(252);function l(e,t,o,n,l,s){const r=(0,a.up)("Banner"),i=(0,a.up)("HeaderWrap"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{bannerState:l.BannerState,onBannerClose:s.closeBanner},null,8,["bannerState","onBannerClose"]),(0,a.Wm)(i),(0,a.Wm)(c)],64)}const s=(0,a.Uk)(" coffeekong "),r=(0,a.Uk)(" product "),i=(0,a.Uk)(" service "),c=(0,a.Uk)(" company "),d=(0,a.Uk)(" event ");function p(e,t,o,n,l,p){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,[(0,a.Wm)(u,{to:"/"},{default:(0,a.w5)((()=>[s])),_:1})]),(0,a._)("nav",null,[(0,a.Wm)(u,{to:"/"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(u,{to:"/service"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a.Wm)(u,{to:"/company"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(u,{to:"/event"},{default:(0,a.w5)((()=>[d])),_:1})])])}var u={},m=o(744);const h=(0,m.Z)(u,[["render",p],["__scopeId","data-v-2a1caa44"]]);var f=h;const v=e=>((0,a.dD)("data-v-45ebb970"),e=e(),(0,a.Cn)(),e),g={key:0,class:"banner"},_=v((()=>(0,a._)("h1",null,[(0,a.Uk)(" 지금 커피를 구매하시면 "),(0,a._)("br"),(0,a.Uk)(" 머그컵을 드려요! ")],-1))),w=v((()=>(0,a._)("span",{class:"material-icons cupIcon"}," free_breakfast ",-1)));function b(e,t,o,n,l,s){return o.bannerState?((0,a.wg)(),(0,a.iD)("div",g,[_,w,(0,a._)("span",{class:"material-icons closeBtn",onClick:t[0]||(t[0]=(...e)=>s.closeBtn&&s.closeBtn(...e))}," close ")])):(0,a.kq)("",!0)}var k={props:{bannerState:Boolean},methods:{closeBtn(){this.$emit("bannerClose")}}};const C=(0,m.Z)(k,[["render",b],["__scopeId","data-v-45ebb970"]]);var x=C,y={name:"App",data(){return{BannerState:!0}},methods:{closeBanner(){this.BannerState=!1}},components:{HeaderWrap:f,Banner:x}};const j=(0,m.Z)(y,[["render",l]]);var D=j,O=o(119),B=o(577);const S=e=>((0,a.dD)("data-v-3d24d04f"),e=e(),(0,a.Cn)(),e),M={id:"container"},W=S((()=>(0,a._)("h2",null,"coffee list",-1))),z={class:"in_wrap"},Z=["onClick"],I=["src","alt","onClick"];function A(e,t,o,n,l,s){const r=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",M,[W,(0,a._)("div",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.coffees,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"content",key:t},[(0,a._)("h3",{onClick:e=>s.modalOpen(t)},(0,B.zw)(e.title),9,Z),(0,a._)("img",{src:e.image,alt:e.id,onClick:e=>s.modalOpen(t)},null,8,I),(0,a.Wm)(r,{modal:l.modal,coffee:l.coffees,crt:l.crt,onCloseModal:s.modalClose},null,8,["modal","coffee","crt","onCloseModal"])])))),128))]),(0,a._)("button",{class:"more",onClick:t[0]||(t[0]=(...e)=>s.more&&s.more(...e))},"더보기")])}var H=o(669),U=o.n(H),L=[{id:"0",title:"아메리카노",price:3800,image:"https://joonsol.github.io/data/0.png",text:"아메리카노는 에스프레소 샷 두 개를 추출하여 바로 컵에 붓고, 그 위에 뜨거운 물을 재빠르게 부어 얇은 크레마 층이 형성되는 음료입니다."},{id:"1",title:"카푸치노",price:4500,image:"https://joonsol.github.io/data/1.png",text:"풍부하고 진한 에스프레소에 따뜻한 우유와 벨벳 같은 우유 거품이 1:1 비율로 어우러져 마무리된 커피 음료"},{id:"2",title:"까페라떼",price:4600,image:"https://joonsol.github.io/data/2.png",text:"풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"},{id:"4",title:"바닐라라떼",price:5100,image:"https://joonsol.github.io/data/3.png",text:"풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"}];const Y={key:0,class:"modal_Container"},q={class:"modal"},K=["src","alt"];function $(e,t,o,n,l,s){return o.modal?((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("div",q,[(0,a._)("h4",null,(0,B.zw)(o.coffee[o.crt].title),1),(0,a._)("img",{src:o.coffee[o.crt].image,alt:o.coffee[o.crt].id},null,8,K),(0,a._)("p",null,(0,B.zw)(o.coffee[o.crt].text),1),(0,a._)("span",{class:"close material-icons",onClick:t[0]||(t[0]=(...e)=>s.mClose&&s.mClose(...e))},"close")])])):(0,a.kq)("",!0)}var P={props:{coffee:Array,crt:Number,modal:Boolean},methods:{mClose(){this.$emit("closeModal")}}};const F=(0,m.Z)(P,[["render",$],["__scopeId","data-v-c0e8f660"]]);var N=F,T={data(){return{coffees:L,modal:!1,crt:0,moreList:0}},methods:{more(){U().get(`https://joonsol.github.io/data/more${this.moreList}.json`).then((e=>{console.log(e.data),this.coffees.push(e.data),this.moreList++,2==this.moreList&&(this.moreList=0)}))},modalOpen(e){this.crt=e,this.modal=!this.modal},modalClose(){this.modal=!1}},components:{Modal:N}};const E=(0,m.Z)(T,[["render",A],["__scopeId","data-v-3d24d04f"]]);var Q=E;const G=e=>((0,a.dD)("data-v-b1c248f4"),e=e(),(0,a.Cn)(),e),J={id:"container"},R=G((()=>(0,a._)("h2",null," service ",-1))),V={class:"service_wrap"},X=["onClick"],ee={key:0},te={class:"material-icons"},oe={class:"svc_btn"};function ne(e,t,o,l,s,r){return(0,a.wg)(),(0,a.iD)("div",J,[R,(0,a._)("div",V,[(0,a._)("nav",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.service,((e,t)=>((0,a.wg)(),(0,a.iD)("a",{href:"#",key:t,onClick:(0,n.iM)((e=>r.tabOpen(t)),["prevent"]),class:(0,B.C_)({On:t===s.crt})},(0,B.zw)(e.title),11,X)))),128))]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.service,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"service_content",key:t},[s.crt==t?((0,a.wg)(),(0,a.iD)("div",ee,[(0,a._)("h4",null,(0,B.zw)(e.content),1),(0,a._)("p",null,(0,B.zw)(e.call),1),(0,a._)("span",te,(0,B.zw)(e.icon),1),(0,a._)("button",oe,(0,B.zw)(e.title)+" 바로가기 ",1)])):(0,a.kq)("",!0)])))),128))])])}var ae=[{id:"0",title:"커피콩문의",content:"질문 또는 건의 사항이 있으신가요? 이용에 불편한 점이 있으신가요? 궁금하신 사항을 문의해주세요. 친절히 답변해 드리겠습니다.",call:"1558-3030",icon:"support_agent"},{id:"1",title:"A/S 신청",content:"자주하는 질문 FAQ 를 안내해 드립니다.",call:"1558-3031",icon:"phone_in_talk"},{id:"3",title:"매장 칭찬하기",content:"매장 이용 시 불편사항, 주문, 배송 문제, 제품 등 궁금하신 사항을 문의해주세요.",call:"1558-3033",icon:"sms"},{id:"4",title:"콜센터",content:"궁금증이 풀리지 않으셨나요? 고객 상담센터로 전화주세요.",call:"1558-3034",icon:"info"}],le={data(){return{service:ae,crt:0,On:""}},methods:{tabOpen(e){this.crt=e,console.log(this.crt)},tabClose(){}}};const se=(0,m.Z)(le,[["render",ne],["__scopeId","data-v-b1c248f4"]]);var re=se;function ie(e,t,o,n,l,s){return(0,a.wg)(),(0,a.iD)("div",null," company ")}var ce={};const de=(0,m.Z)(ce,[["render",ie]]);var pe=de;const ue=e=>((0,a.dD)("data-v-4c3b5a03"),e=e(),(0,a.Cn)(),e),me={id:"container"},he=ue((()=>(0,a._)("h2",null,"event list",-1))),fe={class:"in_wrap"},ve=["src","onClick"];function ge(e,t,o,n,l,s){const r=(0,a.up)("eventModal");return(0,a.wg)(),(0,a.iD)("div",me,[he,(0,a._)("div",fe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.events,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"content",key:t},[(0,a._)("h3",null,(0,B.zw)(e.title),1),(0,a._)("img",{src:e.image,onClick:e=>s.modalOpen(t),style:{width:"250px",height:"250px"}},null,8,ve),(0,a.Wm)(r,{modalShows:l.modalShow,crt:l.crt,event:l.events,onCloseModal:s.modalClose},null,8,["modalShows","crt","event","onCloseModal"])])))),128))])])}var _e=[{id:"0",title:"어린이날",image:"https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg",text:"어린이날을 맞이하여 바닐라라떼 10잔 구매 장난감을 증정합니다. 아이가 즐거워 하는 어린이날을 맞이하세요!"},{id:"1",title:"어버이날",image:"https://images.pexels.com/photos/4063548/pexels-photo-4063548.jpeg?cs=srgb&dl=pexels-eden-curtis-4063548.jpg&fm=jpg",text:"어버이날을 맞이하여 카푸치노 3잔 구매 시 카네이션을 증정합니다. 부모님과 함께하는 어버이날을 맞이하세요!"},{id:"2",title:"근로자의 날",image:"https://images.pexels.com/photos/3737696/pexels-photo-3737696.jpeg?cs=srgb&dl=pexels-cottonbro-3737696.jpg&fm=jpg",text:"근로자의 날을 맞이하여 매장 당 선착순 3명에게 에코 백을 증정합니다."},{id:"4",title:"부처님 오신 날",image:"https://images.pexels.com/photos/6978234/pexels-photo-6978234.jpeg?cs=srgb&dl=pexels-heather-brock-6978234.jpg&fm=jpg",text:"부처님 오신 날을 맞이하여 5월 한정 샐러드볼을 출시하였습니다."}];const we={key:0,class:"modal_Container"},be={class:"modal"},ke=["src"];function Ce(e,t,o,n,l,s){return o.modalShows?((0,a.wg)(),(0,a.iD)("div",we,[(0,a._)("div",be,[(0,a._)("h4",null,(0,B.zw)(o.event[o.crt].title),1),(0,a._)("img",{src:o.event[o.crt].image,style:{width:"300px",height:"300px"}},null,8,ke),(0,a._)("p",null,(0,B.zw)(o.event[o.crt].text),1),(0,a._)("span",{class:"close material-icons",onClick:t[0]||(t[0]=(...e)=>s.mClose&&s.mClose(...e))},"close")])])):(0,a.kq)("",!0)}var xe={props:{modalShows:Boolean,crt:Number,event:Array},methods:{mClose(){this.$emit("closeModal")}}};const ye=(0,m.Z)(xe,[["render",Ce],["__scopeId","data-v-1a998cec"]]);var je=ye,De={data(){return{events:_e,modalShow:!1,crt:0}},methods:{modalOpen(e){this.crt=e,this.modalShow=!this.modalShow},modalClose(){this.modalShow=!1}},components:{eventModal:je}};const Oe=(0,m.Z)(De,[["render",ge],["__scopeId","data-v-4c3b5a03"]]);var Be=Oe;const Se=[{path:"/",component:Q},{path:"/service",component:re},{path:"/company",component:pe},{path:"/event",component:Be}],Me=(0,O.p7)({history:(0,O.PO)(),routes:Se});var We=Me;(0,n.ri)(D).use(We).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,l){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],l=e[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&l||s>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(r=!1,l<s&&(s=l));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,s=n[0],r=n[1],i=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(i)var d=i(o)}for(t&&t(n);c<s.length;c++)l=s[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},n=self["webpackChunkcoffeekong"]=self["webpackChunkcoffeekong"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(170)}));n=o.O(n)})();
//# sourceMappingURL=app.deae9a43.js.map