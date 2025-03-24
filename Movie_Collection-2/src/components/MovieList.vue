<script setup>
// import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const movieStore = storeToRefs(useCounterStore())
const { allMovies, oneMovie } = movieStore
const movieFunctions = useCounterStore()

// const allMoviesRef = ref(false)
</script>

<template>
    <div>
        <h3>Enter the movie's title, its production date, where it was filmed and genre.</h3>
        <form @submit.prevent="movieFunctions.addMovieToList">
            <input type="text" v-model="oneMovie.title">
            <input type="date" v-model="oneMovie.productionDate">
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

<style scoped>
button {
  flex: auto;
  border-radius: 10px;
  border: 20px;
  padding: 10px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  align-items: center;
}

button:hover {
    box-shadow: 0 0 0 5px black inset;
}

ul {
    list-style: none;
}

li {
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 0 0 0 1px black inset;
}

h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

p {
    font-family: Arial, Helvetica, sans-serif;
}

input {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0 0 0 1px black inset;

}
</style>