import { monthNames, weekDays } from '@/common/constants/index.js';
import { normalizeTime } from '@/common/helpers/normalizeTime.js';
import {getWeatherIconName} from '@/common/helpers/getWeatherIconName.js';

export const normalizeWeatherInfo = (weatherInfo, days) => {
    const localtimeDate = new Date(weatherInfo.location.localtime);
    const localtimeObj = {
        weekDay: weekDays[localtimeDate.getDay()],
        date: `${localtimeDate.getDate()} ${monthNames[localtimeDate.getMonth()]} ${localtimeDate.getFullYear()}`,
        time: `${normalizeTime(localtimeDate.getHours())} : ${normalizeTime(localtimeDate.getMinutes())}`,
    }

    const currentDayIcon = getWeatherIconName(weatherInfo.current.condition.code, localtimeDate.getHours());

    return {
        ...weatherInfo,
        dateReceipt: new Date().toISOString(),
        currentDayIcon: currentDayIcon,
        localtimeInfo: localtimeObj,
        daysForecast: days,
    };
};
