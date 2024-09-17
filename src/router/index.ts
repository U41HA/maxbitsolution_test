import { useLoaderStore } from '@/stores/loader'
import { createRouter, createWebHistory } from 'vue-router'
import type RouteRecordRaw from 'vue-router'
import Default from '@/layouts/default.vue';

const homeView: RouteRecordRaw = {
  path: '/',
  name: '123',
  redirect: '/cocktails'
}

const layoutDefault: RouteRecordRaw = {
  path: '/cocktails',
  component: Default,
  redirect: `/cocktails/margarita`,
  children: [
    {
      path: `margarita`,
      component: () => import('@/components/templates/MargaritaPage.vue'),
    },
    {
      path: `mojito`,
      component: () => import('@/components/templates/MojitoPage.vue'),
    },
    {
      path: `a1`,
      component: () => import('@/components/templates/A1Page.vue'),
    },
    {
      path: `kir`,
      component: () => import('@/components/templates/KirPage.vue'),
    },
  ],
};

const router = createRouter({
  history: createWebHistory(),
  routes: [ homeView, layoutDefault ],
});

router.beforeEach(() => {
  useLoaderStore().setLoaderToTrue();
});
router.afterEach(() => {
  useLoaderStore().setLoaderToFalse();
});
export default router ;
