<script>
const { $api } = useNuxtApp();
export default {
  data() {
    return {
      movie: null,
      loaded: false,
    };
  },
  mounted() {
    this.searchMovies();
  },
  methods: {
    async searchMovies() {
      const { data } = await $api.movies.getMovie({
        id: this.$route.params.id,
      });
      this.movie = data;
      this.loaded = true;
    },
  },
};
</script>

<template>
  <div v-if="loaded" class="main-wrapper">
    <div>
      <NuxtImg
        v-if="movie.poster_path"
        class="cover"
        fit="fill"
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        width="600"
      />
    </div>
    <div class="description">
      <div class="title-wrapper">
        <h1>{{ movie.title }} - {{ movie.release_date.split("-")[0] }}</h1>
      </div>
      {{ movie.homepage }}
      <h2>{{ movie.tagline }}</h2>
      <h3>{{ movie.overview }}</h3>
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
.title-wrapper {
  display: flex;
  flex-direction: row;
}
.main-wrapper {
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.description {
  padding: 20px;
}
</style>
