import { Component, OnInit } from '@angular/core';
import { Genre }        from '../../models/genre';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  genres: Observable<Genre[]>;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.getMovieGenre();
  }

  getMovieGenre() {
      this.genres = this.movieService.getMovieGenre();
  }

}
