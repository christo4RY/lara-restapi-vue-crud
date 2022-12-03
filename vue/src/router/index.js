import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("./../views/Home.vue"),
    },
    {
        name: "blogs",
        path: "/blogs",
        component: () => import("./../views/Blogs.vue"),
    },
    {
        name: "new-blog",
        path: "/new-blog",
        component: () => import("./../components/CreateBlog.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
