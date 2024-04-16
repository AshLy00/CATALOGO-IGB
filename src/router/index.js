import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/description/:projectId",
      name: "description",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DescriptionView.vue"),
    },

    {
      path: "/electrodomesticos",
      name: "electrodomesticos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ElectrodomesticosView.vue"),
      props: true,
    },
    {
      path: "/cocina",
      name: "cocina",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CocinaView.vue"),
    },
    {
      path: "/salud",
      name: "salud",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SaludView.vue"),
    },
    {
      path: "/iluminacion",
      name: "iluminacion",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/IluminacionView.vue"),
    },
    {
      path: "/tecnologia",
      name: "tecnologia",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TecnologiaView.vue"),
    },
    {
      path: "/piscinas y accesorios",
      name: "piscinas y accesorios",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PiscinasView.vue"),
    },
    {
      path: "/jardineria",
      name: "jardineria",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/JardineriaView.vue"),
    },
    {
      path: "/hogar",
      name: "hogar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HogarView.vue"),
    },
    {
      path: "/jugueteria",
      name: "jugueteria",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/jugueteriaView.vue"),
    },
    {
      path: "/mascotas",
      name: "mascotas",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MascotasView.vue"),
    },
    {
      path: "/deporte",
      name: "deporte",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DeporteView.vue"),
    },

    {
      path: "/accesorios",
      name: "accesorios",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AccesoriosParaVehiculosView.vue"),
    },
    {
      path: "/baño",
      name: "baño",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BañoView.vue"),
    },
    {
      path: "/oficina",
      name: "oficina",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OficinaView.vue"),
    },
    {
      path: "/dormitorio",
      name: "dormitorio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DormitorioView.vue"),
    },
    {
      path: "/bebes y niños",
      name: "bebes y niños",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BebesYNiñosView.vue"),
    },
    {
      path: "/comedor",
      name: "comedor",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ComedorView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
