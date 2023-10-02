<script setup lang="ts">
import MovieCard from "~/components/Shared/MovieCard.vue";

const { $api } = useNuxtApp();
const loaded = false;

const { data: topRatedMovies } = await $api.movies.getTopRated();
const { data: trendingMovies } = await $api.movies.getTrending();
</script>

<template>
  <div class="main-wrapper" :v-if="loaded">
    <SharedSectionTitle title="FILMS A LA UNE" />
    <div class="product-wrapper">
      <div v-for="movie in topRatedMovies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>

    <SharedSectionTitle title="FILMS LES MIEUX NOTES" />
    <div class="product-wrapper">
      <div v-for="movie in trendingMovies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
}
.section-title {
  padding-left: 20px;
}
.main-wrapper {
  padding: 40px;
}
</style>
