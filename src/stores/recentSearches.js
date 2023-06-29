import { defineStore } from 'pinia';

export const useRecentSearchesStore = defineStore('recentSearches', {
    state: () => ({
        recentSearches: [],
    }),
    getters: {
        getRecentSearch: state => cityName => state.recentSearches.find(city => city === cityName),
    },
    actions: {
        initRecentStore() {
            // Если существуют записи в localStorage, то записать их в store
            if (localStorage.getItem('recentSearches')) {
                this.recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
            } else {
                localStorage.setItem('recentSearches', JSON.stringify([]));
            }
        },
        setLocalStorage() {
            localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches))
        },
        setRecentSearch(cityName) {
            if (this.getRecentSearch(cityName)) {
                // Если город уже есть, то ставить его на первое месте в списке
                const cityIndex = this.recentSearches.findIndex((city) => city === cityName);
                this.recentSearches.splice(cityIndex, 1);
                this.recentSearches.unshift(cityName);
                this.setLocalStorage();
            } else if (this.recentSearches.length === 6) {
                // Если 6 городов уже есть, то удалить последний и вставить новый в начало
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
