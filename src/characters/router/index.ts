import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from '@/characters/layout/CharacterLayout.vue';
import CharacterId from '../../characters/pages/CharacterId.vue';
import CharacterList from '../pages/CharacterList.vue';
import CharacterSearch from '../pages/CharacterSearch.vue';

export const characterRoute:RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        { 
            path: 'by/:id',
            name: 'character-id',
            props: { title:'Por ID', visible:false },
            component: CharacterId
        },
        { 
            path: 'list',
            name: 'character-list',
            props: { title:'Lista', visible:false },
            component: CharacterList
        },
        { 
            path: 'search',
            name: 'character-search',
            props: { title:'Búsqueda', visible:false },
            component: CharacterSearch
        },
    ]
}