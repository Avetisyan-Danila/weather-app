import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

router.afterEach(async (to, from) => {
    document.title = to.meta.title ? `Weather App | ${to.meta.title}` : 'Weather App';
})
