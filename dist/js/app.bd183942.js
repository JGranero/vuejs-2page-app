(function(t){function e(e){for(var c,s,o=e[0],i=e[1],l=e[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},a={app:0},r=[];function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2fb4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"getSites",(function(){return Qt})),n.d(c,"updateLanguage",(function(){return zt}));var a={};n.r(a),n.d(a,"ADD_TO_SITES",(function(){return Yt})),n.d(a,"ADD_MORE_SITES",(function(){return Jt})),n.d(a,"CHANGE_SEARCH_DATA",(function(){return Ft})),n.d(a,"UPDATE_COPY",(function(){return Zt})),n.d(a,"UPDATE_LANGUAGE",(function(){return Vt})),n.d(a,"RESET_QUERY",(function(){return Kt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function s(t,e,n,c,a,s){var o=Object(r["t"])("Header"),i=Object(r["t"])("router-view");return Object(r["o"])(),Object(r["d"])("div",{class:t.$store.state.lang},[Object(r["f"])(o),Object(r["f"])(i)],2)}var o=n("5530"),i=(n("b0c0"),{id:"topnav"}),l={class:"container"},u=Object(r["f"])("span",null,null,-1),d=Object(r["f"])("span",null,null,-1),b=Object(r["f"])("span",null,null,-1),f=Object(r["f"])("span",null,null,-1),O={id:"topnav__title"},j={id:"topnav__nav",ref:"nav"};function p(t,e,n,c,a,s){var o=Object(r["t"])("router-link");return Object(r["o"])(),Object(r["d"])("div",i,[Object(r["f"])("div",l,[Object(r["f"])("div",{id:"topnav__list-icon",ref:"list_icon",onClick:e[1]||(e[1]=function(t){return s.toggleClass()})},[u,d,b,f],512),Object(r["f"])("h1",O,Object(r["v"])(t.$route.name),1),Object(r["f"])("nav",j,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["s"])(s.copy,(function(t,e){return Object(r["o"])(),Object(r["d"])(o,{key:e,to:t.path,innerHTML:t.text},null,8,["to","innerHTML"])})),128))],512),Object(r["f"])("div",{id:"topnav__language-toggle",onClick:e[2]||(e[2]=function(t){return s.toggleLanguage()})},Object(r["v"])(t.$store.state.lang.toUpperCase()),1)])])}var v=n("5502"),h={name:"Header",props:{msg:String},computed:{copy:function(){return this.$store.state.copydeck.header}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(v["b"])(["updateLanguage"])),Object(v["c"])(["UPDATE_LANGUAGE"])),{},{toggleLanguage:function(){"en"==this.$store.state.lang?this.UPDATE_LANGUAGE("fr"):this.UPDATE_LANGUAGE("en"),this.updateLanguage(this.$store.state.lang)},toggleClass:function(){this.$refs.list_icon.classList.toggle("open"),this.$refs.nav.classList.toggle("open")}})};h.render=p;var g=h,m={components:{Header:g},methods:Object(o["a"])({},Object(v["b"])(["updateLanguage"])),created:function(){this.updateLanguage(this.$store.state.lang)}};m.render=s;var _=m,y=n("6c02"),w={class:"site-list"},S={class:"container"},A={class:"site-list__no-result"},x=Object(r["e"])('".');function E(t,e,n,c,a,s){var o=Object(r["t"])("Search"),i=Object(r["t"])("Card"),l=Object(r["t"])("LoadMore");return Object(r["o"])(),Object(r["d"])("div",w,[Object(r["f"])(o),Object(r["f"])("div",S,[Object(r["B"])(Object(r["f"])("div",{class:"site-list__results"},Object(r["v"])(t.$store.state.resultTotal)+" "+Object(r["v"])(s.copy.results),513),[[r["y"],t.$store.state.resultTotal>0]]),Object(r["B"])(Object(r["f"])("div",A,[Object(r["e"])(Object(r["v"])(s.copy.notFound)+' "',1),Object(r["f"])("strong",null,Object(r["v"])(t.$store.state.query),1),x],512),[[r["y"],0==t.$store.state.resultTotal]]),(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["s"])(t.$store.state.sites,(function(t,e){return Object(r["o"])(),Object(r["d"])(i,{key:t.id,index:e,site:t},null,8,["index","site"])})),128)),Object(r["B"])(Object(r["f"])(l,{onClick:e[1]||(e[1]=function(t){return s.loadMore()}),class:"loadmore--blue"},null,512),[[r["y"],a.currentPage<t.$store.state.pageTotal]])])])}var T={class:"card"},P={class:"card__image"},C={class:"card__index"},k={class:"card__info"},L={class:"card__arrow"};function D(t,e,n,c,a,s){var o=Object(r["t"])("ArrowIcon"),i=Object(r["t"])("router-link");return Object(r["o"])(),Object(r["d"])(i,{to:"/site-details",onClick:e[1]||(e[1]=function(t){return s.stockDetails()})},{default:Object(r["A"])((function(){return[Object(r["f"])("div",T,[Object(r["f"])("div",P,[Object(r["f"])("img",{src:n.site.images[0]},null,8,["src"]),Object(r["f"])("div",C,[Object(r["f"])("span",null,Object(r["v"])(n.index+1),1)])]),Object(r["f"])("div",k,[Object(r["f"])("h2",null,Object(r["v"])(n.site.title),1),Object(r["f"])("p",null,Object(r["v"])(n.site.contacts.main.firstName)+" "+Object(r["v"])(n.site.contacts.main.lastName),1),Object(r["f"])("p",null,Object(r["v"])(n.site.contacts.main.address.city)+", "+Object(r["v"])(n.site.contacts.main.address.country.toUpperCase()),1)]),Object(r["f"])("div",L,[Object(r["f"])(o)])])]})),_:1})}n("a9e3");var U={"enable-background":"new 0 0 512.002 512.002",version:"1.1",viewBox:"0 0 512.002 512.002","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},N=Object(r["f"])("path",{d:"m388.42 241.95l-236.82-236.16c-7.759-7.733-20.321-7.72-28.067 0.04-7.74 7.759-7.72 20.328 0.04 28.067l222.72 222.1-222.73 222.1c-7.759 7.74-7.779 20.301-0.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074 0 10.141-1.932 14.017-5.795l236.82-236.16c3.737-3.718 5.834-8.778 5.834-14.05s-2.103-10.326-5.834-14.051z",fill:"#3a3a3a"},null,-1);function I(t,e){return Object(r["o"])(),Object(r["d"])("svg",U,[N])}const M={};M.render=I;var $=M,q={name:"Card",props:{site:Object,index:Number},components:{ArrowIcon:$},methods:{stockDetails:function(){localStorage.setItem("site",JSON.stringify(this.site))}}};q.render=D;var G=q,B=(n("ac1f"),n("841c"),{class:"search"});function R(t,e,n,c,a,s){return Object(r["o"])(),Object(r["d"])("div",B,[Object(r["f"])("p",null,Object(r["v"])(s.copy.search),1),Object(r["B"])(Object(r["f"])("input",{class:"search__input","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.searchQuery=t}),type:"text",placeholder:s.copy.placeholder},null,8,["placeholder"]),[[r["x"],a.searchQuery]]),Object(r["f"])("span",{class:["search__cross",a.searchQuery?"search__cross--grey":"search__cross--white"],onClick:e[2]||(e[2]=function(t){return s.eraseSearch()})},"✕",2)])}var H={name:"Search",data:function(){return{searchQuery:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(v["b"])(["getSites"])),Object(v["c"])(["RESET_QUERY"])),{},{eraseSearch:function(){this.searchQuery=null,this.RESET_QUERY(),this.getSites({page:1,limit:10})}}),watch:{searchQuery:function(t){t&&this.getSites({page:1,limit:10,query:t})}},computed:{copy:function(){return this.$store.state.copydeck.search_component}}};H.render=R;var Q=H,z={class:"loadmore",id:"loadmore"},Y={class:"loadmore__content"};function J(t,e){return Object(r["o"])(),Object(r["d"])("button",z,[Object(r["f"])("div",Y,Object(r["v"])(t.$store.state.copydeck.loadmore.text),1)])}const F={};F.render=J;var Z=F,V={name:"Site List",data:function(){return{sites:null,currentPage:1}},components:{Card:G,Search:Q,LoadMore:Z},methods:Object(o["a"])(Object(o["a"])({},Object(v["b"])(["getSites","addMoreSites"])),{},{loadMore:function(){this.currentPage++,this.getSites({page:this.currentPage,limit:10,pagination:!0})}}),computed:{copy:function(){return this.$store.state.copydeck.sitelist}},mounted:function(){this.getSites({page:1,limit:10})}};V.render=E;var K=V,W={class:"site-details"},X={class:"site-details__top-info"},tt={class:"container"},et={class:"site-details__top-info-image"},nt={class:"site-details__image"},ct={class:"container"},at={class:"container"},rt={class:"site-details__main-info"},st={class:"site-details__info-group"},ot={class:"site-details__info-group"},it={class:"site-details__info-group"},lt={class:"site-details__info-group"};function ut(t,e,n,c,a,s){var o=Object(r["t"])("ArrowIcon"),i=Object(r["t"])("PersonIcon"),l=Object(r["t"])("PhoneIcon"),u=Object(r["t"])("EnvelopeIcon"),d=Object(r["t"])("PinIcon");return Object(r["o"])(),Object(r["d"])("div",W,[Object(r["f"])("div",X,[Object(r["f"])("div",tt,[Object(r["f"])(o,{onClick:e[1]||(e[1]=function(t){return s.goBack()})}),Object(r["f"])("div",et,[Object(r["f"])("img",{src:a.site.images[0]},null,8,["src"])]),Object(r["f"])("div",null,[Object(r["f"])("h2",null,Object(r["v"])(a.site.title),1),Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.firstName)+" "+Object(r["v"])(a.site.contacts.main.lastName),1),Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.address.city)+", "+Object(r["v"])(a.site.contacts.main.address.country.toUpperCase()),1)])])]),Object(r["f"])("div",nt,[Object(r["f"])("div",ct,[Object(r["f"])("img",{src:a.site.images[0]},null,8,["src"])])]),Object(r["f"])("div",at,[Object(r["f"])("div",rt,[Object(r["f"])("div",st,[Object(r["f"])(i),Object(r["f"])("div",null,[Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.firstName)+" "+Object(r["v"])(a.site.contacts.main.lastName),1),Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.jobTitle),1)])]),Object(r["f"])("div",ot,[Object(r["f"])(l),Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.phoneNumber),1)]),Object(r["f"])("div",it,[Object(r["f"])(u),Object(r["f"])("p",null,Object(r["v"])(a.site.contacts.main.email.toLowerCase()),1)]),Object(r["f"])("div",lt,[Object(r["f"])(d),Object(r["f"])("div",null,[Object(r["f"])("p",null,Object(r["v"])(a.site.address.street),1),Object(r["f"])("p",null,Object(r["v"])(a.site.address.zipCode)+" "+Object(r["v"])(a.site.address.city)+", "+Object(r["v"])(a.site.address.country.toUpperCase()),1)])])])])])}var dt={"enable-background":"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"},bt=Object(r["f"])("path",{d:"m10.688 95.156c70.27 59.511 193.57 164.21 229.81 196.85 4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.57-137.38 229.84-196.9 4.375-3.698 5.042-10.198 1.5-14.719-8.188-10.447-20.396-16.437-33.48-16.437h-426.67c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z"},null,-1),ft=Object(r["f"])("path",{d:"m505.81 127.41c-3.781-1.76-8.229-1.146-11.375 1.542-77.928 66.062-177.39 150.74-208.68 178.94-17.563 15.854-41.938 15.854-59.542-0.021-33.354-30.052-145.04-125-208.66-178.92-3.167-2.688-7.625-3.281-11.375-1.542-3.77 1.751-6.187 5.522-6.187 9.678v268.25c0 23.532 19.135 42.667 42.667 42.667h426.67c23.531 0 42.666-19.135 42.666-42.667v-268.25c0-4.156-2.417-7.937-6.187-9.677z"},null,-1);function Ot(t,e){return Object(r["o"])(),Object(r["d"])("svg",dt,[bt,ft])}const jt={};jt.render=Ot;var pt=jt,vt={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ht=Object(r["f"])("title",null,"telephone",-1),gt=Object(r["f"])("path",{d:"M0,256C0,114.61,114.61,0,256,0S512,114.63,512,256,397.38,512,256,512,0,397.39,0,256Z",fill:"#6e6e6e"},null,-1),mt=Object(r["f"])("path",{d:"M170,114c5.26,1.33,8.49,5,11.33,9.38,11.22,17.39,22.67,34.64,33.94,52,4.3,6.6,3.91,12.77-1.61,18.38-3.36,3.39-7.34,6.15-11.12,9.1-3.06,2.37-6.38,4.43-9.41,6.87-8.17,6.67-10.68,15.18-7.81,25.31,2.66,9.44,7.76,17.72,12.89,25.94,17,27.16,40.12,47.61,68.62,62a67.56,67.56,0,0,0,11.64,4.31c8.35,2.33,15.37-.17,20.76-6.84,3.05-3.81,5.65-8,8.51-12A98.7,98.7,0,0,1,314,300c6.58-7.42,14.72-8.38,23.09-2.91q23.2,15.16,46.33,30.37c1.77,1.17,3.49,2.46,5.34,3.5,4.5,2.54,7.91,5.93,9.27,11.09v7.2a3,3,0,0,0-.36.72C395,363.13,389,374.72,381,385.29c-3.2,4.21-6.82,8.39-12.37,9.24-9.76,1.44-19.58,3.21-29.39,3.43-34.27.73-65.85-9.28-95.48-25.65-39.86-22-71.79-52.69-96.38-91-15.85-24.67-27-51.26-31.51-80.37-.8-5.1-1.32-10.27-2-15.38,0-6.09,0-12.18,0-18.31.14-.8.36-1.58.49-2.38.78-5.76,1.53-11.51,2.33-17.27.73-5.53,2.77-10.43,7.19-13.92a130,130,0,0,1,13.19-9.58A85.55,85.55,0,0,1,163.33,114Z",fill:"#fff","fill-rule":"evenodd"},null,-1);function _t(t,e){return Object(r["o"])(),Object(r["d"])("svg",vt,[ht,gt,mt])}const yt={};yt.render=_t;var wt=yt,St={id:"Layer_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},At=Object(r["f"])("g",null,[Object(r["f"])("path",{d:"m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z"})],-1);function xt(t,e){return Object(r["o"])(),Object(r["d"])("svg",St,[At])}const Et={};Et.render=xt;var Tt=Et,Pt={viewBox:"-42 0 512 512.002",xmlns:"http://www.w3.org/2000/svg"},Ct=Object(r["f"])("path",{d:"m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"},null,-1),kt=Object(r["f"])("path",{d:"m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"},null,-1);function Lt(t,e){return Object(r["o"])(),Object(r["d"])("svg",Pt,[Ct,kt])}const Dt={};Dt.render=Lt;var Ut=Dt,Nt={components:{EnvelopeIcon:pt,ArrowIcon:$,PhoneIcon:wt,PinIcon:Tt,PersonIcon:Ut},data:function(){return{site:Object}},methods:{parseProps:function(){this.site=JSON.parse(localStorage.getItem("site"))},goBack:function(){this.$router.go(-1)}},created:function(){this.site=JSON.parse(localStorage.getItem("site"))}};Nt.render=ut;var It=Nt,Mt=[{path:"/",name:"Site List",component:K},{path:"/site-details",name:"Site Details",component:It,props:!0}],$t=Object(y["a"])({history:Object(y["b"])("/"),routes:Mt}),qt=$t,Gt=n("bc3a"),Bt=n.n(Gt),Rt={header:{nav1:{text:"&#8962; Home",path:"/"},nav2:{text:"This",path:"/"},nav3:{text:"Could be",path:"/"},nav4:{text:"A Menu",path:"/"}},loadmore:{text:"Load More"},sitelist:{notFound:"Sorry, no result found with",results:"results found."},search_component:{search:"Search:",placeholder:"Through all the database"}},Ht={header:{nav1:{text:"&#8962; Accueil",path:"/"},nav2:{text:"Serait-ce",path:"/"},nav3:{text:"Un Menu?",path:"/"}},loadmore:{text:"+ de sites"},sitelist:{notFound:"Désolé, rien ne correspond à",results:"resultats trouvés."},search_component:{search:"Recherche : ",placeholder:"Parmis toutes les données"}},Qt=function(t,e){var n=t.state,c=t.commit,a="";e.query?a=e.query:n.query&&(a=n.query),Bt.a.get("http://localhost:3000/sites?",{params:{_page:e.page,_limit:e.limit,q:a}}).catch((function(t){console.log(t)})).then((function(t){e.pagination?c("ADD_MORE_SITES",{payload:t.data}):(c("ADD_TO_SITES",{payload:t.data,query:e.query}),c("CHANGE_SEARCH_DATA",{pages:Math.round(t.headers["x-total-count"]/e.limit+.5),results:t.headers["x-total-count"]}))}))},zt=function(t,e){var n=t.commit;document.documentElement.lang=e,n("UPDATE_LANGUAGE",e),"en"===e?n("UPDATE_COPY",{lang:Rt}):"fr"===e&&n("UPDATE_COPY",{lang:Ht})},Yt=(n("99af"),function(t,e){var n=e.payload,c=e.query;t.sites=[],t.sites=t.sites.concat(n),t.query=c}),Jt=function(t,e){var n=e.payload;t.sites=t.sites.concat(n)},Ft=function(t,e){var n=e.pages,c=e.results;t.pageTotal=n,t.resultTotal=c},Zt=function(t,e){t.copydeck=e.lang},Vt=function(t,e){t.lang=e},Kt=function(t){t.query=null},Wt=n("94d5"),Xt={sites:[],resultTotal:Number,pageTotale:Number,query:"",copydeck:"Object",lang:"en"},te=new v["a"].Store({state:Xt,actions:c,mutations:a,getters:Wt});n("2fb4");Object(r["c"])(_).use(te).use(qt).mount("#app")},"94d5":function(t,e){}});
//# sourceMappingURL=app.bd183942.js.map