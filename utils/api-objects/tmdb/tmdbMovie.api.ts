import { TMDBBaseAPI } from "./tmdbBase.api";

export class TMDBMovieAPI extends TMDBBaseAPI {
  async GetMovie(movieID: number) {
    // * RequestURL = 'https://api.themoviedb.org/3/movie/315162?api_key='
    const moviePathParameter = `/movie/${movieID}`;
    return await this.request.get(this.tmdbAPIURL + moviePathParameter + this.tmdbV3APIKey);
  }
}
