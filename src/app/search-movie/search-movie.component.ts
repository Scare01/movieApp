import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';





@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  search_results: any;
  movie: any;

  ngOnInit() {

  }

  searchMovie() {

    this.movieService.searchMovie(this.movie).subscribe(data => { this.search_results = data['results'] });
  }

}
