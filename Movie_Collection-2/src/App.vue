<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useCounterStore } from './stores/counter';
import MovieForm from './components/MovieForm.vue';
import MovieItem from './components/MovieItem.vue';

const movieStore = useCounterStore()
const { allMovies, oneMovie } = storeToRefs(useCounterStore());
const movieFunctions = movieStore


</script>

<template>
  <h1>Create your own Movie Collection</h1>
  <MovieForm v-if="oneMovie" />
  <button @click="oneMovie = {}" v-if="!oneMovie">Add movie to your list</button>
  <div class="wide" v-for="movie in allMovies" :key="movie.id" @click="oneMovie = movie">
      <MovieItem :movie="movie" />
  </div>
</template>

<style>
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(196, 175, 154);
}

li, ul {
  font-family: Arial, Helvetica, sans-serif;
}

.wide{
  width: 100vw;
}
button {
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  width: 200px;
}

button:hover {
    box-shadow: 0 0 0 5px black inset;
}
</style>