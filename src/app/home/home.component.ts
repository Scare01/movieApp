import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  genres: any;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => { this.popular_movies = data['results'] })

  }

}
