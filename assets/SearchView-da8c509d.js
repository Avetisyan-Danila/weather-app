import{_ as N,r,u as x,w as g,a as k,b as L,o as b,c as F,d as R,e as l,f as u,g as a,h as W,i as d,j as p,k as w,T as S,l as B,m as E,F as A,n as M,p as T,q as U,s as j,t as q}from"./main-8ef16e78.js";import{A as z,C as D}from"./CityCard-d81e1b8b.js";import{c as G}from"./capitalizeFirstLetter-56b907fd.js";const P=c=>(j("data-v-a81e441d"),c=c(),q(),c),H={class:"search"},J={class:"search__top"},K=["onSubmit"],O=["src"],Q={key:0,class:"recent"},X=P(()=>a("div",{class:"recent__title"},"Recent searches",-1)),Y={class:"recent__list"},Z={class:"recent__item"},$={__name:"SearchView",setup(c){const h=r(!0),s=r(""),n=r(""),v=r(""),f=x();g(s,()=>{h.value=!0});const _=k(),m=L(),i=r([]),C=async t=>{v.value=await B(),await y(t,!0)},y=async(t,o)=>{if(!o&&!s.value){h.value=!1,n.value="";return}const e=o?v.value:s.value;try{await _.setCityWeather(e,3),m.setRecentSearch(e),n.value="",await f.push({name:"detailed",params:{city:e}})}catch{n.value="Couldn`t find the city"}};b(async()=>{for(const t of m.recentSearches)await _.setCityWeather(t,1),i.value.push(_.getCityWeather(t,1))});const I=F(),V=R(()=>i.value.length!==m.recentSearches.length);return g(V,t=>{I.setLoadingIndicator(t)},{immediate:!0}),(t,o)=>(l(),u("div",H,[a("div",J,[a("form",{class:"search__form",action:"#",onSubmit:W(y,["prevent"])},[d(z,{type:"text",name:"search",placeholder:"Name of the city",modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e),"is-valid":h.value,"empty-error-message":"Enter the name of the city","search-error-message":n.value},null,8,["modelValue","is-valid","search-error-message"])],40,K),a("div",{onClick:C,class:"search__location"},[a("img",{src:p(E)("icons/location.svg"),alt:"Geolocation",width:"22",height:"22"},null,8,O)])]),d(S,{name:"fade",appear:""},{default:w(()=>[i.value.length?(l(),u("div",Q,[X,a("ul",Y,[(l(!0),u(A,null,M(i.value,e=>(l(),u("li",Z,[d(S,{name:"list",appear:""},{default:w(()=>[d(D,{to:{name:"detailed",params:{city:e.location.name}},title:e.location.name,weatherIcon:e.currentDayIcon,weatherName:p(G)(p(T)[e.current.condition.code])},null,8,["to","title","weatherIcon","weatherName"])]),_:2},1024)]))),256))])])):U("",!0)]),_:1})]))}},oe=N($,[["__scopeId","data-v-a81e441d"]]);export{oe as default};
