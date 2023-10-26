
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { characterRoute } from '@/characters/router/index';

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        //PUBLIC
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },
        
        //CHARACTERS
        {
            ...characterRoute,
            path: '/characters'
        },
        // characterRoute,
        // { 
        //     path: '/characters', 
        //     name: 'characters', 
        //     component: () => import('@/characters/layout/CharacterLayout.vue') 
        // },

        //DEFAULT
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
    ]
});

// router.addRoute( characterRoute );

export default router;