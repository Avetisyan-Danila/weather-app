export const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        children: [
            {
                path: "/detailed/:city",
                name: "detailed-home",
                component: () => import("../views/DetailedView.vue"),
            },
        ]
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/SearchView.vue"),
        children: [
            {
                path: "/detailed/:city",
                name: "detailed-search",
                component: () => import("../views/DetailedView.vue"),
            },
        ]
    },
];
