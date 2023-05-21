import { defineStore } from 'pinia';

export const useLoadingIndicatorStore = defineStore('loadingIndicator', {
    state: () => ({
        loading: false,
    }),
    actions: {
        setLoadingIndicator(value) {
            this.loading = value;
        }
    }
})
