import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private router: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit() {
    const id = +this.router.snapshot.paramMap.get('movieID');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }


  goBack() {
    this.location.back();
  }

}