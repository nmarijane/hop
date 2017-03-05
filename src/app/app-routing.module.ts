import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { MoviesComponent }      from './components/movies/movies.component';
import { MovieDetailComponent }  from './components/movie-detail/movie-detail.component';
import { MovieGenreComponent }  from './components/movie-genre/movie-genre.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  component: DashboardComponent },
  { path: 'dashboard',  component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'movies/genres/:id', component:  MovieGenreComponent},
  { path: 'movies',     component: MoviesComponent },
  { path: 'tv',     component: MoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
