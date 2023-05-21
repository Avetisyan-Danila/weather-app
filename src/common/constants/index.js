import {getUserCityName} from "@/common/helpers/getUserCityName.js";

export const API_KEY = '142881e823a2448c849171124230505';
export const WEATHER_BASE_URL = 'http://api.weatherapi.com/v1';

export const USER_GEOLOCATION_BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export const MAIN_CITY = await getUserCityName();

export const MINUTE_IN_SEC = 60;
export const ONE_MINUTE = 1;

export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
