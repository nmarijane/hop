import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { MovieSearchService } from '../../services/movie-search.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.css' ],
  providers: [MovieSearchService]
})
export class MovieSearchComponent implements OnInit {
  movies: Observable<Movie[]>;
  private searchTerms = new Subject<string>();
  searchshow: Boolean;

  constructor(
    private movieSearchService: MovieSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.searchshow = true;
  }

  ngOnInit(): void {
    this.movies = this.searchTerms
      .debounceTime(100)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term ? this.movieSearchService.search(term)  : Observable.of<Movie[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Movie[]>([]);
      });
  }

  gotoDetail(movie: Movie): void {
    let link = ['/movie', movie.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
