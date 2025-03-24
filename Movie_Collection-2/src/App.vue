<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useCounterStore } from './stores/counter';
import MovieList from './components/MovieList.vue';

const movieStore = useCounterStore()
const { allMovies, oneMovie } = storeToRefs(useCounterStore());
const movieFunctions = movieStore


</script>

<template>
  <h1>Create your own Movie Collection</h1>
  <MovieList v-if="oneMovie" />
  <button @click="oneMovie = {}" v-if="!oneMovie">Add movie to your list</button>
  <div v-for="movie in allMovies" :key="movie.id">
    <div @click="oneMovie = movie">
      <MovieItem :movie="movie" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

li, ul {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  flex: auto;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

button:hover {
    box-shadow: 0 0 0 5px black inset;
}
</style>