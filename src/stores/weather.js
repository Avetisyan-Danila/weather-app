import { defineStore } from "pinia";
import { getCityWeather } from "@/services/forecast-service.js";
import { normalizeWeatherInfo } from "@/common/helpers/normalizeWeatherInfo.js";
import { getOneMinuteAgo } from "@/common/helpers/getOneMinuteAgo.js";

export const useWeatherStore = defineStore("weather", {
    state: () => ({
        citiesWeather: [],
    }),
    getters: {
        cityWeather: state => cityName => state.citiesWeather.find(city => city.location.name === cityName),
    },
    actions: {
        async setCityWeather(cityName, days) {
            // Если погода для города уже есть, то делать повторные запрос, если данные получены более минуты назад
            if (this.cityWeather(cityName)) {
                if (!getOneMinuteAgo(this.cityWeather(cityName).dateReceipt)) {
                    return
                } else {
                    this.citiesWeather = this.citiesWeather.filter(city => city.location.name !== cityName)
                }
            }

            const cityWeather = await getCityWeather(cityName, days);
            this.citiesWeather.push(normalizeWeatherInfo(cityWeather));
        },
    }
})
