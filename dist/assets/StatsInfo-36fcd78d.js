import{_ as o,i as c,j as i,s,q as a,x as e,t as _,y as d,E as h,G as r}from"./index-63fa704b.js";const n=t=>(h("data-v-b9f431eb"),t=t(),r(),t),l={key:0,class:"stats"},p={class:"stats__point"},u=["src"],m={class:"stats__value"},f=n(()=>s("span",{class:"stats__name"},"Chance of rain",-1)),g={class:"stats__point"},y=["src"],I={class:"stats__value"},w=n(()=>s("span",{class:"stats__name"},"Humidity",-1)),S={class:"stats__point"},b=["src"],v={class:"stats__value"},k=n(()=>s("span",{class:"stats__name"},"Wind speed",-1)),x={__name:"StatsInfo",props:{weatherInfo:{type:Object,required:!0}},setup(t){return(B,j)=>t.weatherInfo?(c(),i("ul",l,[s("li",p,[s("img",{class:"stats__img",src:a(e)("stats/precipitation.png"),alt:"Precipitation",width:"24",height:"24"},null,8,u),s("span",m,_(t.weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain)+"%",1),f]),s("li",g,[s("img",{class:"stats__img",src:a(e)("stats/humidity.png"),alt:"Humidity",width:"24",height:"24"},null,8,y),s("span",I,_(t.weatherInfo.current.humidity)+"%",1),w]),s("li",S,[s("img",{class:"stats__img",src:a(e)("stats/wind-speed.png"),alt:"Wind speed",width:"24",height:"24"},null,8,b),s("span",v,_(Math.round(t.weatherInfo.current.wind_kph))+" km/h",1),k])])):d("",!0)}},C=o(x,[["__scopeId","data-v-b9f431eb"]]);export{C as S};
