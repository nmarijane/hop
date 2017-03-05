import { Component, OnInit,  trigger, state, style, transition, animate } from '@angular/core';

import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      ]),
      transition('* => void', [
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
    movies: Movie[];
    errorMessage: string;
    starsCount: number;
    urlImg: string;

    constructor(
        private movieService: MovieService,
        private router: Router
     ) {
       this.urlImg = "https://image.tmdb.org/t/p/w185";
      }

    ngOnInit(): void {
        this.getMovieByPopularity();
    }

    getMovieByPopularity() {
      this.starsCount = 4;
        this.movieService.getMovieByPopularity(1, '2015-11-16', '2017-01-01', 'popularity.desc', false, false).subscribe(
          movies => {
            this.movies = movies;
          }
        );
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
