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
    },
];
