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
  <button class="intitialAppButton submit" @click="oneMovie = {}" v-if="!allMovies.length && !oneMovie">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </button>
  <div class="wide" v-for="movie in allMovies" :key="movie.id" @click="oneMovie = movie">
    <MovieItem :movie="movie" />
  </div>
</template>

<style>
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(33, 161, 121);
}

li,
ul {
  font-family: Arial, Helvetica, sans-serif;
}

.wide {
  width: 100vw;
}

.intitialAppButton {
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  width: 20rem;
  height: 20rem;
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 100%;
}

@keyframes pulse {
  0% {
    opacity: 10%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    opacity: 10%;
  }
}
</style>