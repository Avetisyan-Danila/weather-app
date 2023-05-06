import { MINUTE_IN_SEC, ONE_MINUTE } from "@/common/constants/index.js";

export const getOneMinuteAgo = date => {
    const seconds = Math.floor((new Date() - Date.parse(date)) / 1000);

    // Проверяем, если данные получены более минуты назад
    let interval = seconds / MINUTE_IN_SEC;
    return interval > ONE_MINUTE;
};
