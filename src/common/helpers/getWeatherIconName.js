import weatherConditions from "@/common/enums/weatherConditions.js";

export const getWeatherIconName = (code, time) => {
    if (code === 1000) {
        return time >= 6 && time < 22 ? 'sunny' : 'clear';
    }

    if (code === 1003) {
        return time >= 6 && time < 22 ? 'partly-cloudy-day' : 'partly-cloudy-night';
    }

    if (code === 1063) {
        return time >= 6 && time < 22 ? 'partly-cloudy-day' : 'partly-cloudy-night';
    }

    return weatherConditions[code];
}
