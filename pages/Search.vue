<template>
  <div class="main-wrapper">
    <h1>RECHERCHE</h1>
    <input
      v-model="searchQuery"
      placeholder="La ligne verte..."
      @input="searchMovies"
    />
    <div class="product-wrapper">
      <div v-for="movie in movies" :key="movie.id">
        <SharedMovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
const { $api } = useNuxtApp();
export default {
  data() {
    return {
      searchQuery: "",
      movies: [],
    };
  },
  methods: {
    async searchMovies() {
      const { data } = await $api.movies.searchMovie({
        query: this.searchQuery,
      });
      this.movies = data;
    },
  },
};
</script>
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
