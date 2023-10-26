<script setup lang="ts">
import CardListVue from "../components/CardList.vue";

const props = defineProps<{ title: string, visible:boolean }>();

</script>

<template>
    <h1>{{ props.title }}</h1>

    <CardListVue />
</template>


<style scoped>

</style>