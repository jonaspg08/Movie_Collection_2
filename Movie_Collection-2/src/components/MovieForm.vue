<script setup>
// import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { onMounted } from 'vue';

const movieStore = storeToRefs(useCounterStore())
const { oneMovie } = movieStore
const movieFunctions = useCounterStore()

// const allMoviesRef = ref(false)
</script>

<template>
    <div>
        <form>
            <h3>Enter the movie's title, its production date, where it was filmed and genre.</h3>
            <section class="flex">
                <input type="text" v-model="oneMovie.title" placeholder="Title">
                <input type="date" v-model="oneMovie.productionDate">
                <select v-model="oneMoviewhere" placeholder="Origin">
                    <option value=""></option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="UK">UK</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                </select>
                <select v-model="oneMovie.genre" placeholder="Genre">
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
            <div class="buttonRow">
                <button class="submit" @click.prevent="movieFunctions.addMovieToList" type="submit"> <svg class="icon add-icon"
                        view-box="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 5v14M5 12h14"></path>
                    </svg>
                </button>
                <br>
                <button class="cancel" oneMovie=false>
                    <svg class="icon add-cancel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
                <br>
                <button class="deleteMovie" @click="movieFunctions.deleteMovieFromList(oneMovie)">
                    <svg class="icon add-cancel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18M9 6v12m6-12v12M4 6l1-3h14l1 3M5 6h14v14H5z"></path>
                    </svg>
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.buttonRow {
    display: flex;
    gap: 10px;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 180px;
}

form {
    justify-content: center;
    background-color: black;
    color: white;
    width: 800px;
    height: 300px;
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

.icon {
    width: 20px;
    height: 20px;
}
</style>