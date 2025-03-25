<script setup>
const oneMovie = defineProps(['movie'])
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
    justify-content: space-between;
    padding: 0;
    border-radius: 10px;
    background-color: rgb(196, 175, 154);
    box-shadow: 0 0 3px black inset;
    margin: 10px;
}

h4,
p {
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    margin: 10px;
    color: rgb(30, 30, 36);
}
</style>