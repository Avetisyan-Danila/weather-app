import{_ as g,r,w as v,H as S,u as V,I as C,N as I,a as F,f as N,d as x,i,j as n,q as b,k as u,J as L,F as k,A as W,y as A,l as B,s as _,v as E,T as R}from"./index-d16872ee.js";import{A as M,C as T}from"./CityCard-ef925f73.js";import{c as j}from"./capitalizeFirstLetter-56b907fd.js";const q={class:"favorites"},z=["onSubmit"],D={key:0,class:"favorites__list"},H={class:"favorites__item"},J={__name:"FavoritesView",setup(P){const c=r(!0),e=r(""),s=r("");v(e,()=>{c.value=!0});const h=S(),l=V(),p=C(),d=I(),f=async()=>{if(!e.value){c.value=!1,s.value="";return}try{await l.setCityWeather(e.value,7),p.setRecentSearch(e.value),s.value="",await h.push({name:"detailed",params:{city:e.value}})}catch{s.value="Couldn`t find the city"}},o=r([]);F(async()=>{for(const t of d.favorites)await l.setCityWeather(t,1),o.value.push(l.getCityWeather(t,1))});const y=N(),w=x(()=>o.value.length!==d.favorites.length);return v(w,t=>{y.setLoadingIndicator(t)},{immediate:!0}),(t,m)=>(i(),n("div",q,[b("form",{class:"favorites__form",action:"#",onSubmit:L(f,["prevent"])},[u(M,{type:"text",name:"favorite",placeholder:"Name of the city",modelValue:e.value,"onUpdate:modelValue":m[0]||(m[0]=a=>e.value=a),"is-valid":c.value,"empty-error-message":"Enter the name of the city","search-error-message":s.value},null,8,["modelValue","is-valid","search-error-message"])],40,z),o.value.length?(i(),n("ul",D,[(i(!0),n(k,null,W(o.value,a=>(i(),n("li",H,[u(R,{name:"list",appear:""},{default:B(()=>[u(T,{to:{name:"detailed",params:{city:a.location.name}},title:a.location.name,weatherIcon:a.currentDayIcon,weatherName:_(j)(_(E)[a.current.condition.code])},null,8,["to","title","weatherIcon","weatherName"])]),_:2},1024)]))),256))])):A("",!0)]))}},O=g(J,[["__scopeId","data-v-66c46eab"]]);export{O as default};
