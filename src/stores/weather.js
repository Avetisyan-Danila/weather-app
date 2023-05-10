import { defineStore } from "pinia";
import { fetchCityWeather } from "@/services/forecast-service.js";
import { normalizeWeatherInfo } from "@/common/helpers/normalizeWeatherInfo.js";
import { getMinutesAgo } from "@/common/helpers/getMinutesAgo.js";
import { ONE_MINUTE } from "@/common/constants/index.js";

export const useWeatherStore = defineStore("weather", {
    state: () => ({
        citiesWeather: [],
    }),
    getters: {
        getCityWeather: state => cityName => state.citiesWeather.find(city => city.location.name === cityName),
    },
    actions: {
        async setCityWeather(cityName, days) {
            // Если погода для города уже есть, то делать повторные запрос, если данные получены более минуты назад
            if (this.getCityWeather(cityName)) {
                if (!getMinutesAgo(this.getCityWeather(cityName).dateReceipt, ONE_MINUTE) && this.getCityWeather(cityName).dayForecast === days) {
                    return
                } else {
                    this.citiesWeather = this.citiesWeather.filter(city => city.location.name !== cityName)
                }
            }

            const cityWeather = await fetchCityWeather(cityName, days);
            this.citiesWeather.push(normalizeWeatherInfo(cityWeather, days));
        },
    }
})
