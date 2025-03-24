<script setup>
const oneMovie=defineProps(['movie'])
</script>

<template>
    <section>
        <h4>{{ oneMovie.movie.title }}</h4>
        <p>{{ oneMovie.movie.productionDate }}</p>
        <p>{{ oneMovie.movie.where }}</p>
        <p>{{ oneMovie.movie.genre }}</p>
    </section>
</template>

<style scoped>
    section {
    list-style: none;
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    padding: 0;
    /* border:solid 1px black; */
    border-radius: 10px;
    background-color: rgb(196, 175, 154);
    box-shadow: 0 0 3px black inset;
    margin: 10px;
    /* width: 90%; */
}

h4, p {
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    margin: 10px;
    color: rgb(30, 30, 36)
    /* border: 1px solid black; */

}
</style>