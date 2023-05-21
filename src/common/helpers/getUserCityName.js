import { fetchUserGeolocation } from "@/services/user-geolocation-service.js";

export const getUserCityName = async () => {
    const geolocationInfo = await fetchUserGeolocation();
    return geolocationInfo.city;
}
