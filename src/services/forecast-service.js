import { API_KEY, BASE_URL } from "@/common/constants";

export const fetchCityWeather = (city, days) => {
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no?timestamp=${new Date().getTime()}`)
        .then((response) => response.json())
}
