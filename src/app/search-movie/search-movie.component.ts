import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';





@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

}
