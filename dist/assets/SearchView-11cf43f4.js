import{_ as x,r,H as N,w as g,u as b,I as k,a as L,f as E,d as F,i as l,j as u,q as a,J as R,k as d,s as p,l as w,T as S,K as W,x as A,F as B,A as G,v as M,y as T,E as U,G as j}from"./index-9eb2d130.js";import{A as q,C as z}from"./CityCard-be51411f.js";import{c as D}from"./capitalizeFirstLetter-56b907fd.js";const H=c=>(U("data-v-646d4b7c"),c=c(),j(),c),J={class:"search"},K={class:"search__top"},P=["onSubmit"],O=["src"],Q={key:0,class:"recent"},X=H(()=>a("div",{class:"recent__title"},"Recent searches",-1)),Y={class:"recent__list"},Z={class:"recent__item"},$={__name:"SearchView",setup(c){const h=r(!0),s=r(""),n=r(""),v=r(""),f=N();g(s,()=>{h.value=!0});const _=b(),m=k(),i=r([]),C=async t=>{v.value=await W(),await y(t,!0)},y=async(t,o)=>{if(!o&&!s.value){h.value=!1,n.value="";return}const e=o?v.value:s.value;try{await _.setCityWeather(e,3),m.setRecentSearch(e),n.value="",await f.push({name:"detailed",params:{city:e}})}catch{n.value="Couldn`t find the city"}};L(async()=>{for(const t of m.recentSearches)await _.setCityWeather(t,1),i.value.push(_.getCityWeather(t,1))});const I=E(),V=F(()=>i.value.length!==m.recentSearches.length);return g(V,t=>{I.setLoadingIndicator(t)},{immediate:!0}),(t,o)=>(l(),u("div",J,[a("div",K,[a("form",{class:"search__form",action:"#",onSubmit:R(y,["prevent"])},[d(q,{type:"text",name:"search",placeholder:"Name of the city",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),"is-valid":h.value,"empty-error-message":"Enter the name of the city","search-error-message":n.value},null,8,["modelValue","is-valid","search-error-message"])],40,P),a("div",{onClick:C,class:"search__location"},[a("img",{src:p(A)("icons/location.svg"),alt:"Geolocation",width:"22",height:"22"},null,8,O)])]),d(S,{name:"fade",appear:""},{default:w(()=>[i.value.length?(l(),u("div",Q,[X,a("ul",Y,[(l(!0),u(B,null,G(i.value,e=>(l(),u("li",Z,[d(S,{name:"list",appear:""},{default:w(()=>[d(z,{to:{name:"detailed",params:{city:e.location.name}},title:e.location.name,weatherIcon:e.currentDayIcon,weatherName:p(D)(p(M)[e.current.condition.code])},null,8,["to","title","weatherIcon","weatherName"])]),_:2},1024)]))),256))])])):T("",!0)]),_:1})]))}},oe=x($,[["__scopeId","data-v-646d4b7c"]]);export{oe as default};
