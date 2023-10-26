<script setup lang="ts">

import { ref } from 'vue';
import rickAndMortyApi from '../../api/rickAndMorityApi';
import type { Character } from '../interfaces/character';
import { useCharacters } from '@/characters/composables/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import CharacterCard from './CharacterCard.vue';


// 1- Normal Suspense
// const { data: characters } = await rickAndMortyApi.get<Character[]>('/character');
// const characters = ref<any[]>( data );

// 2- Composable funcsions
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

// 3- TansStank Query

const getCharactersSlow = async():Promise<Character[]> => {

    return new Promise( (resolve) => {

        setTimeout( async() => {
            const { data } = await rickAndMortyApi.get<Character[]>('/character');
            resolve( data.results );
        }, 1)
    });
}
const { isLoading, isError, data: characters, error } = useQuery(
    ['characters'],
    getCharactersSlow,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always'
    }
)


</script>
<template>
<ul>
    <h1 v-if="isLoading">Loading....</h1>
    <div class="card-list">
        <CharacterCard
            v-for="character of characters"
            :key="character.id"
            :character="character"
        />
    </div>
</ul>
</template>


<style scoped>

.card-list {
    display: grid;
    grid-template-columns: auto auto auto auto;
}

</style>