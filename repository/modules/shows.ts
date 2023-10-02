import { FetchOptions } from "ofetch";
import { AsyncDataOptions } from "#app";

// locals
import FetchFactory from "../factory";

export type IShows = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  vote_average: number;
  poster_path: string;
};

type IRes = {
  page: number;
  results: IShows[];
};

class ShowsModule extends FetchFactory<IRes> {
  /**
   * Return the products as array
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  getTopRated(asyncDataOptions?: AsyncDataOptions<IShows[]>) {
    const url =
      "https://api.themoviedb.org/3/tv/top_rated?page=1&language=fr-FR&limit=10";
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWYzZWIyZDAzYWJjZTU4NGQxZjMzY2QzMmNkYmVlOCIsInN1YiI6IjY1MTVjZGFkY2FkYjZiMDJiYzBiZWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vl8BW17cf4yia_wvqDcRKPvwWrtA86YcHUeOqQbIH3w",
        },
      };
      return this.call(
        "GET",
        `${url}`,
        undefined, // body
        fetchOptions,
      ).then((res) => res.results);
    }, asyncDataOptions);
  }

  getTrending(asyncDataOptions?: AsyncDataOptions<IShows[]>) {
    const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWYzZWIyZDAzYWJjZTU4NGQxZjMzY2QzMmNkYmVlOCIsInN1YiI6IjY1MTVjZGFkY2FkYjZiMDJiYzBiZWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vl8BW17cf4yia_wvqDcRKPvwWrtA86YcHUeOqQbIH3w",
        },
      };
      return this.call(
        "GET",
        `${url}`,
        undefined, // body
        fetchOptions,
      ).then((res) => res.results);
    }, asyncDataOptions);
  }
}

export default ShowsModule;
