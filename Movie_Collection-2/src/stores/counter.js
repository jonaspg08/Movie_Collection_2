import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const oneMovie = ref(false)
  console.log(oneMovie.value)
  const allMovies = ref(JSON.parse(localStorage.getItem('allMovies')) || [])
  function addMovieToList() {
    if (!allMovies.value.includes(oneMovie.value)) {
      allMovies.value.push(JSON.parse(JSON.stringify(oneMovie.value)))
    } console.log(allMovies.value)
    oneMovie.value = false
    localStorage.setItem('allMovies', JSON.stringify(allMovies.value));
  }

  addMovieToList();
  return {
    oneMovie,
    allMovies,
    addMovieToList
  }
})