import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
    routes,
    history: createWebHistory('/weather-app/'),
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

router.afterEach(async (to, from) => {
    window.scrollTo(0, 0)
    // Для десктопов и планшетов, так как верхняя точка у них - wrapper
    document.querySelector('#wrapper').scrollTo(0, 0)

    document.title = to.meta.title ? `Weather App | ${to.meta.title}` : 'Weather App';
})
