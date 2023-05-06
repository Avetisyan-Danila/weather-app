import { MINUTE_IN_SEC } from "@/common/constants/index.js";

export const getMinutesAgo = (date, minutes) => {
    const seconds = Math.floor((new Date() - Date.parse(date)) / 1000);

    // Проверяем, если данные получены более minutes назад
    let interval = seconds / MINUTE_IN_SEC;
    return interval > minutes;
};
