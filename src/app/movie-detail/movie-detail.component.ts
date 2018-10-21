import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  recommendations: any;


  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('movieID');
    this.movieService.getMovie(id).subscribe(data => this.movie = data);
    this.movieService.getRecommendations(id).subscribe(data => this.recommendations = data['results']);
  }

}
