import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '8f2490decc0a336ae87db98a12a29a59';
  private movie_string: string;
  private id: number;

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }



  getMovie(id: number) {
    return this.http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

  getRecommendations(id: number) {
    return this.http.get(this.movie_url + 'movie/' + id + '/recommendations?api_key=' + this.api_key);
  }

}
