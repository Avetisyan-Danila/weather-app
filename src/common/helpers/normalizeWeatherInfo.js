import weatherConditions from "@/common/enums/weatherConditions.js";
import { monthNames, weekDays } from "@/common/constants/index.js";

export const normalizeWeatherInfo = (weatherInfo) => {
    const currentDayIcon = weatherConditions[weatherInfo.current.condition.code];

    const localtimeDate = new Date(weatherInfo.location.localtime);
    const localtimeObj = {
        weekDay: weekDays[localtimeDate.getDay()],
        date: `${localtimeDate.getDate()} ${monthNames[localtimeDate.getMonth()]} ${localtimeDate.getFullYear()}`,
        time: `${localtimeDate.getHours()}:${localtimeDate.getMinutes()}`,
    }

    return {
        ...weatherInfo,
        dateReceipt: new Date().toISOString(),
        currentDayIcon: currentDayIcon,
        localtimeInfo: localtimeObj,
    };
};
