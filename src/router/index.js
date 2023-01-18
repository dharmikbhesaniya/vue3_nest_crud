import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Admin from "../views/admin/Admin.vue";
import Products from "../views/admin/Products.vue";
import ProductCreate from "../views/admin/ProductCreate.vue";
import ProductEdit from "../views/admin/ProductEdit.vue";
import NotFound from "../components/NotFound.vue";
const routes = [
    {
        path: "/",
        name: "main",
        component: Main,
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        children: [
            {
                path: "products",
                name: "Products",
                component: Products,
            },
            {
                path: "create",
                name: "ProductCreate",
                component: ProductCreate,
            },
            {
                path: "edit/:id",
                name: "ProductEdit",
                component: ProductEdit,
                props: true,
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
