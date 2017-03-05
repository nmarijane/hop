import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy,HostBinding, trigger, transition, animate, style, state }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Observable }     from 'rxjs/Observable';

import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-movie-genre',
  templateUrl: '../dashboard/dashboard.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class MovieGenreComponent implements OnInit {
  id: string;
  movies: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.movies = this.movieService.getMovieByGenre(this.id);
    });

  }

}
