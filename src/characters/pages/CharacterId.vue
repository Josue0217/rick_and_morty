<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCharacter } from '../composables/useCharacter';


const route = useRoute();

const { id } = route.params;

const { isLoading, isError, character, errorMessage } = useCharacter( id.toString() );

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>

    <div v-else-if="isError">
        {{ errorMessage }}
    </div>


    <div v-else-if="character">
        <h1>{{ character.name }}</h1>
        <h4>Status: {{ character.status }}</h4>
        <h4>Species: {{ character.species }}</h4>
        <h4>Gender: {{ character.gender }}</h4>
        <div class="character-container">
            <img :src="character.image" :alt="character.name">
            
        </div>

    </div>
</template>


<style scoped>
    .character-container{
        display: flex;
        flex-direction: row;
    }

    img{
        width: 150px;
        border-radius: 5px;
    }
</style>