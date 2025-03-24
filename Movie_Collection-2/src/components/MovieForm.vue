<script setup>
// import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const movieStore = storeToRefs(useCounterStore())
const { oneMovie } = movieStore
const movieFunctions = useCounterStore()

// const allMoviesRef = ref(false)
</script>

<template>
    <div >
        <form>
            <h3>Enter the movie's title, its production date, where it was filmed and genre.</h3>
            <section class="flex">
                <input type="text" v-model="oneMovie.title">
                <input type="date" v-model="oneMovie.productionDate">
                <input type="text" v-model="oneMovie.where" placeholder="Herkunftsland">
                <select v-model="oneMovie.genre">
                    <option value=""></option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Western">Western</option>
                </select>
            </section>
            <button @click.prevent="movieFunctions.addMovieToList"type="submit">Add to your list</button>
            <br>
            <button @click="oneMovie = false">Cancel</button>
            <br>
            <button @click="movieFunctions.deleteMovieFromList(oneMovie)">Delete</button>
        </form>
    </div>
</template>

<style scoped>
form {
    justify-content: center;
    background-color: black;
    color: white;
    width: 70%;
    height: 30%;
    border-radius: 20px;
    margin: 15% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(33, 161, 121);
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

div {
    position: fixed;
    background-color: rgba(211, 211, 211, 0);
    backdrop-filter: blur(10px);
    height: 100vh;
    width: 100vw;
}

.flex {
    display: flex;
    justify-content: center;
}

select {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0 0 0 1px black inset;
}
</style>