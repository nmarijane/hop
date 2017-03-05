import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy,HostBinding, trigger, transition, animate, style, state, Input, ViewContainerRef }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Observable }     from 'rxjs/Observable';

import { Movie }        from '../../models/movie';
import { Genre }        from '../../models/genre';
import { Trailer }        from '../../models/trailer';
import { MovieService } from '../../services/movie.service';
import { Router }            from '@angular/router';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'my-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.css' ],
  animations: [
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.3s ease-in')
    ]),
    transition(':leave', [
      animate('0.4s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]),
]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  moviesRelated: Movie[];
  id: number;
  genres: Genre[];
  trailer: Trailer;
  urlImg: string;
  urlImgBack: string;
  urlImgBackPrez: string;
  bodyModal: string;
  urlYoutube: string;
  modal: Modal;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private overlay: Overlay,
    private vcRef: ViewContainerRef
  ) {
    overlay.defaultViewContainer = vcRef;
    this.urlImg = "https://image.tmdb.org/t/p/w342/";
    this.urlImgBack = "https://image.tmdb.org/t/p/w154/";
    this.urlImgBackPrez = "https://image.tmdb.org/t/p/original/";
    this.urlYoutube = "https://www.youtube.com/embed/";
  }

  ngOnInit(): void {
      this.getMovie();
    /*this.movie = this.route.params.
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']));*/
    //this.movie = this.movieService.getMovie(params);
  }

  getMovie(){
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.movieService.getMovie(this.id).subscribe(
        movie => {
          this.movie = movie;
          this.movie.poster_path = this.urlImg + movie.poster_path;
          this.trailer = this.movie.videos['results'].filter(trailer => trailer.type == "Trailer")[0];
          this.moviesRelated =  this.movie.similar['results'].filter(movie => movie.backdrop_path != null);
          this.genres =  this.movie.genres;
          this.modal.alert()
              .size('lg')
              .showClose(true)
              .keyboard(27)
              .title('A simple Alert style modal window')
              .body('<iframe width="853" height="480" [src]="https://www.youtube.com/embed/{{this.trailer.key}}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
        }
      );

    });

  }

  showTrailer() {
    this.modal.alert().open();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
