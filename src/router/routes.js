export const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/SearchView.vue"),
        meta: {
            title: 'Search for City',
        }
    },
    {
        path: "/detailed/:city",
        name: "detailed",
        meta: {
            title: '7 Days',
        },
        component: () => import("../views/DetailedView.vue"),
    },
    {
        path: "/feedback",
        name: "feedback",
        component: () => import("@/views/FeedbackView.vue"),
        meta: {
            title: 'Feedback',
        },
    },
    {
        path: "/favorites",
        name: "favorites",
        component: () => import("@/views/FavoritesView.vue"),
        meta: {
            title: 'Favorites',
        },
    },
];
