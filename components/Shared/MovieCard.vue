<script lang="ts">
import { useFavoritesStore } from "~/store/favorites";

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const favoritesStore = useFavoritesStore();
    const favorites = computed(() => favoritesStore.getFavorites);
    const { removeFavorites, addFavorite, isFav } = favoritesStore;
    return { favorites, removeFavorites, addFavorite, isFav };
  },
  data() {
    return {
      isFavorite: false,
      loaded: false,
    };
  },
  mounted() {
    console.log("hello", this.$route);

    // Check if the item is already in favorites when the component is mounted
    this.isFavorite = this.isFav(this.movie.id);
    this.loaded = this.favorites && true;
  },
};
</script>

<template>
  <div class="cardWrapper">
    <div class="card">
      <font-awesome-icon
        v-if="loaded"
        :color="isFav(movie.id) ? 'red' : 'white'"
        :icon="isFav(movie.id) ? 'heart' : ['fas', 'heart']"
        class="favorite-icon"
        @click="
          isFav(movie.id) ? removeFavorites(movie.id) : addFavorite(movie)
        "
      />
      <nuxt-link :to="'/details/' + movie.id">
        <NuxtImg
          v-if="movie.poster_path"
          class="cover"
          fit="fill"
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          width="300"
        />
      </nuxt-link>
    </div>
    <div class="desc">
      <h4 class="title">
        {{ movie.title }}
      </h4>
      <div class="rating">
        <NuxtRating
          class="stars"
          rating-size="20"
          read-only
          :rating-value="movie.vote_average / 2"
        />
        <span>
          {{ movie.vote_average }}
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.cover {
  display: block;
}
.stars {
  position: relative;
}
.desc {
  padding: 5px;
}
.cardWrapper {
  padding: 20px;
}
.rating {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
}
.title {
  margin: 0;
  max-width: 300px;
}
.card {
  position: relative;
  border-radius: 20px;
  border: 2px solid gray;
  width: 300px;
  height: 450px;
  overflow: hidden;
}
.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 99;
}
</style>
