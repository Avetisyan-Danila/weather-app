import { USER_GEOLOCATION_BASE_URL } from "@/common/constants";

export const fetchUserGeolocation = () => {
    return fetch(USER_GEOLOCATION_BASE_URL)
            .then((response) => response.json());
}
