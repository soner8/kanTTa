import { $fetch, FetchOptions } from "ofetch";

// locals
import MoviesModule from "~/repository/modules/movies";
import ShowsModule from "~/repository/modules/shows";

interface IApiInstance {
  movies: MoviesModule;
  shows: ShowsModule;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.apiBaseUrl as string,
  };

  const apiFecther = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    movies: new MoviesModule(apiFecther),
    shows: new ShowsModule(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
