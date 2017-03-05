import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Movie }                from '../../models/movie';
import { MovieService }         from '../../services/movie.service';

@Component({
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.css' ]
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;
  selectedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router) { }

  getMovies(): void {
    this.movies = this.movieService.getMovieByPopularity(1, '2015-11-16', '2016-11-16', 'popularity.desc', false, false);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
