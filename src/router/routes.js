export const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        children: [
            {
                path: "detailed/:city",
                name: "detailed-home",
                meta: {
                    title: '7 Days',
                },
                component: () => import("../views/DetailedView.vue"),
            },
        ]
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/SearchView.vue"),
        meta: {
            title: 'Search for City',
        },
        children: [
            {
                path: "detailed/:city",
                name: "detailed-search",
                meta: {
                    title: '7 Days',
                },
                component: () => import("../views/DetailedView.vue"),
            },
        ]
    },
    {
        path: "/feedback",
        name: "feedback",
        component: () => import("@/views/FeedbackView.vue"),
        meta: {
            title: 'Feedback',
        },
        children: [
            {
                path: "success",
                name: "success",
                component: () => import("@/views/SuccessView.vue"),
            },
        ]
    },
    {
        path: "/favorites",
        name: "favorites",
        component: () => import("@/views/FavoritesView.vue"),
        meta: {
            title: 'Favorites',
        },
        children: [
            {
                path: "detailed/:city",
                name: "detailed-favorites",
                meta: {
                    title: '7 Days',
                },
                component: () => import("../views/DetailedView.vue"),
            },
        ]
    },
];
