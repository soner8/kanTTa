import { defineStore } from "pinia";
import { IMovie } from "~/repository/modules/movies";

export const useFavoritesStore = defineStore({
  id: "favorites",
  state: () => ({
    favorites: [] as IMovie[],
  }),
  getters: {
    getFavorites: (state) => {
      return state.favorites;
    },
  },
  actions: {
    isFav(id: number) {
      return this.favorites.some((obj) => obj.id === id);
    },
    addFavorite(value: IMovie) {
      this.favorites = [...this.favorites, value];
    },
    removeFavorites(value: number) {
      this.favorites = this.favorites.filter((m: IMovie) => value !== m.id);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
