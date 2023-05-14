import { defineStore } from "pinia";

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: [],
    }),
    getters: {
        getFavoriteCity: state => cityName => state.favorites.find(city => city === cityName),
    },
    actions: {
        initFavoritesStore() {
            // Если существуют записи в localStorage, то записать их в store
            if (localStorage.getItem('favorites')) {
                this.favorites = JSON.parse(localStorage.getItem('favorites'));
            } else {
                localStorage.setItem('favorites', JSON.stringify([]));
            }
        },
        setLocalStorage() {
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
        },
        setFavoriteCity(cityName) {
            this.favorites.unshift(cityName);
            this.setLocalStorage();
        },
        removeFavoriteCity(cityName) {
            const cityIndex = this.favorites.findIndex((city) => city === cityName);

            // findIndex вернёт элемент массива или -1
            // Используем bitwise not для определения, если index === -1
            // ~-1 вернёт 0, а значит false
            if (~cityIndex) this.favorites.splice(cityIndex, 1);
            this.setLocalStorage();
        }
    }
})
