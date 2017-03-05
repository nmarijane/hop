import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import {RatingModule} from 'ng2-rating';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

/*Components */
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { MoviesComponent }      from './components/movies/movies.component';
import { MovieDetailComponent }  from './components/movie-detail/movie-detail.component';
import { MovieSearchComponent }  from './components/movie-search/movie-search.component';
import { LeftSidebarComponent }  from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
/*Services*/
import { MovieService }          from './services/movie.service';
import { MovieSearchService }          from './services/movie-search.service';

/*Services*/
import { Configuration }          from './conf/app.constants';
import { FooterComponent } from './components/footer/footer.component';
import { MovieGenreComponent } from './components/movie-genre/movie-genre.component';
import { ImgInputDirective } from './directives/img-input.directive';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    RatingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MoviesComponent,
    MovieSearchComponent,
    LeftSidebarComponent,
    FooterComponent,
    MovieGenreComponent,
    HeaderComponent,
    ImgInputDirective
  ],
  providers: [ MovieService, Configuration ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
