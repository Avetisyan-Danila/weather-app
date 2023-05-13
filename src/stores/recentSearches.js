import { defineStore } from "pinia";

export const useRecentSearches = defineStore('recentSearches', {
    state: () => ({
        recentSearches: [],
    }),
    getters: {
        getRecentSearch: state => cityName => state.recentSearches.find(city => city === cityName),
    },
    actions: {
        setLocalStorage() {
            localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches))
        },
        setRecentSearch(cityName) {
            if (this.getRecentSearch(cityName)) {
                // Если город уже есть, то ставить его на первое месте в списке
                const cityIndex = this.recentSearches.indexOf(cityName);
                this.recentSearches.splice(cityIndex, 1);
                this.recentSearches.unshift(cityName);
                this.setLocalStorage();
            } else if (this.recentSearches.length === 6) {
                // Если 3 города уже есть, то удалить последний и вставить новый в начало
                this.recentSearches.pop();
                this.recentSearches.unshift(cityName);
                this.setLocalStorage();
            } else {
                this.recentSearches.unshift(cityName);
                this.setLocalStorage();
            }
        }
    }
})
