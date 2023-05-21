import{_ as w,H as g,r as h,w as y,g as S,i as p,j as f,k as r,l as u,T as m,q as e,Q as l,R as _,s as d,J as V,x as n,y as x,z as U,E as C,G as I}from"./index-7de741ad.js";import{A as R}from"./AppButton-47c4af0e.js";const o=i=>(C("data-v-9d741855"),i=i(),I(),i),T={class:"feedback"},B=o(()=>e("h2",{class:"feedback__title title title--lg"}," Your feedback can help everyone see more accurate weather conditions! ",-1)),N=["onSubmit"],E={class:"feedback__list"},F={class:"feedback__item"},A={class:"feedback__label",for:"sunny"},M={class:"feedback__img"},j=["src"],q=o(()=>e("div",{class:"feedback__weather"},"Sunny",-1)),z={class:"feedback__item"},D={class:"feedback__label",for:"cloudy"},G={class:"feedback__img"},H=["src"],J=o(()=>e("div",{class:"feedback__weather"},"Cloudy",-1)),Q={class:"feedback__item"},Y={class:"feedback__label",for:"rain"},K={class:"feedback__img"},L=["src"],O=o(()=>e("div",{class:"feedback__weather"},"Rain",-1)),P={class:"feedback__item"},W={class:"feedback__label",for:"snow"},X={class:"feedback__img"},Z=["src"],$=o(()=>e("div",{class:"feedback__weather"},"Snow",-1)),ee={class:"feedback__item"},se={class:"feedback__label",for:"storm"},te={class:"feedback__img"},ae=["src"],oe=o(()=>e("div",{class:"feedback__weather"},"Storm",-1)),le={class:"feedback__item"},_e={class:"feedback__label",for:"thunder"},de={class:"feedback__img"},ne=["src"],ie=o(()=>e("div",{class:"feedback__weather"},"Thunder",-1)),ce={class:"feedback__error"},re={key:0},ue={__name:"FeedbackView",setup(i){const b=g(),s=h(""),c=h(!1);y(s,()=>c.value=!1);const v=()=>{if(!s.value){c.value=!0;return}c.value=!1,b.push({name:"success"}),s.value=""};return(he,t)=>{const k=S("router-view");return p(),f("div",T,[r(m,{name:"fade",appear:""},{default:u(()=>[r(k)]),_:1}),B,e("form",{action:"#",onSubmit:V(v,["prevent"])},[e("ul",E,[e("li",F,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),type:"radio",name:"weather",value:"sunny",id:"sunny"},null,512),[[_,s.value]]),e("label",A,[e("span",M,[e("img",{src:d(n)("weather/sunny.svg"),alt:"Sunny",width:"70",height:"70"},null,8,j)]),q])]),e("li",z,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[1]||(t[1]=a=>s.value=a),type:"radio",name:"weather",value:"cloudy",id:"cloudy"},null,512),[[_,s.value]]),e("label",D,[e("span",G,[e("img",{src:d(n)("weather/cloudy.svg"),alt:"Cloudy",width:"70",height:"70"},null,8,H)]),J])]),e("li",Q,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[2]||(t[2]=a=>s.value=a),type:"radio",name:"weather",value:"rain",id:"rain"},null,512),[[_,s.value]]),e("label",Y,[e("span",K,[e("img",{src:d(n)("weather/rain.svg"),alt:"Rain",width:"70",height:"70"},null,8,L)]),O])]),e("li",P,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[3]||(t[3]=a=>s.value=a),type:"radio",name:"weather",value:"snow",id:"snow"},null,512),[[_,s.value]]),e("label",W,[e("span",X,[e("img",{src:d(n)("weather/snow.svg"),alt:"Snow",width:"70",height:"70"},null,8,Z)]),$])]),e("li",ee,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[4]||(t[4]=a=>s.value=a),type:"radio",name:"weather",value:"storm",id:"storm"},null,512),[[_,s.value]]),e("label",se,[e("span",te,[e("img",{src:d(n)("weather/storm.svg"),alt:"Storm",width:"70",height:"70"},null,8,ae)]),oe])]),e("li",le,[l(e("input",{class:"feedback__input","onUpdate:modelValue":t[5]||(t[5]=a=>s.value=a),type:"radio",name:"weather",value:"thunder",id:"thunder"},null,512),[[_,s.value]]),e("label",_e,[e("span",de,[e("img",{src:d(n)("weather/thunder.svg"),alt:"Thunder",width:"70",height:"70"},null,8,ne)]),ie])])]),e("div",ce,[r(m,{name:"fade",appear:""},{default:u(()=>[c.value?(p(),f("span",re,"Select weather conditions")):x("",!0)]),_:1})]),r(R,{class:"feedback__button",type:"submit"},{default:u(()=>[U("Submit")]),_:1})],40,N)])}}},me=w(ue,[["__scopeId","data-v-9d741855"]]);export{me as default};
