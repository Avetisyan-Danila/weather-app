import { API_KEY, BASE_URL } from "@/common/constants/index.js";

export const getWeather = (city, days) => {
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`)
        .then((response) => response.json())
}
