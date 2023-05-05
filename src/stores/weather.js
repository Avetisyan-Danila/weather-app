import { defineStore } from "pinia";
import { getCityWeather } from "@/services/forecast-service.js";

export const useWeatherStore = defineStore("weather", {
    state: () => ({
        citiesWeather: [],
    }),
    getters: {
        cityWeather: state => cityName => state.citiesWeather.find(city => city.location.name === cityName),
    },
    actions: {
        async setCityWeather(cityName, days) {
            // Если погода для города уже есть, то не делать повторный запрос
            if (this.cityWeather(cityName)) return;

            const cityWeather = await getCityWeather(cityName, days);
            this.citiesWeather.push(cityWeather)
        },
    }
})
