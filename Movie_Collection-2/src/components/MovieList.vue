<script setup>
// import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';

const movieStore = storeToRefs(useCounterStore())
const { allMovies, oneMovie } = movieStore
const movieFunctions = useCounterStore()


</script>

<template>
    <div>
        <h3>Enter the movie's title, its production date, where it was filmed and genre.</h3>
        <form @submit.prevent="movieFunctions.addMovieToList(oneMovie)">
            <input type="text" v-model="oneMovie.title">
            <input type="text" v-model="oneMovie.productionDate">
            <input type="text" v-model="oneMovie.where">
            <input type="text" v-model="oneMovie.genre">
            <button type="submit">Add to your list</button>
        </form>
        <ul>
            <li v-for="movies in allMovies" :key="movies.id">
                <p>{{ movies.title }}</p>
                <p>{{ movies.productionDate }}</p>
                <p>{{ movies.where }}</p>
                <p>{{ movies.genre }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>