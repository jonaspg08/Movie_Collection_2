<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useCounterStore } from './stores/counter';
import MovieList from './components/MovieList.vue';

const movieStore = useCounterStore()
const { allMovies, oneMovie: oneMovieFromStore } = storeToRefs(useCounterStore());
const movieFunctions = movieStore


const allMoviesRef = ref(false)
const oneMovie = ref(false)

</script>

<template>
  <h1>Create your own Movie Collection</h1>
  <br>
  <MovieList v-if="oneMovie" />
  <button @click="oneMovie = {}" v-if="!oneMovie">Add movie to your list</button>
  <div v-for="movie in allMoviesRef" :key="movie.id">
    <div @click="oneMovie = movie">
      {{ movie }}
    </div>
  </div>
</template>

<style scoped></style>