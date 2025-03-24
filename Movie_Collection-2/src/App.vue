<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import MovieList from './components/MovieList.vue';
import { useCounterStore } from './stores/counter';

const movieStore = useCounterStore()
const { allMovies, oneMovie: oneMovieFromStore } = storeToRefs(movieStore);
const movieFunctions = movieStore


const allMoviesRef = ref(false)
const oneMovie = ref(false)

</script>

<template>
  <h1 :class="title">Create your own Movie Collection</h1>
  <p></p>
  <MovieList v-if="oneMovie" />
  <button @click="oneMovie">Add movie to your list</button>
  <div v-for="movie in allMoviesRef">
    <div @click="oneMovie = movie">
    </div>

  </div>
</template>

<style scoped>
.title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}
</style>