<script lang="ts">
import { computed } from "vue";
import { useFavoritesStore } from "~/store/favorites";

export default {
  setup() {
    const favoritesStore = useFavoritesStore();
    const favorites = computed(() => favoritesStore.getFavorites);
    return { favorites };
  },
};
</script>

<template>
  <div class="main-wrapper">
    <SharedSectionTitle title="MES FAVORIS" />
    <div class="product-wrapper">
      <div v-for="movie in favorites" :key="movie.id">
        <SharedMovieCard :movie="movie" />
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
