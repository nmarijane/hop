import { Injectable }    from '@angular/core';
import { Headers, Http, URLSearchParams, Jsonp, Response } from '@angular/http';
import { PlaceSearch } from '../models/placeSearch';
import { Configuration } from '../conf/app.constants';
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class MovieService {

  private headers: Headers;
  private actionUrlSearch: string;
  private apiKey: string;
  private language: string;

  constructor(private http: Http, private jsonp: Jsonp, private configuration: Configuration) {
    this.actionUrlSearch = configuration.serverWithApiUrlSearch;
    this.language = configuration.language;
    this.apiKey = configuration.apiKey;

    /*this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');*/
  }

  getOpenNowByType(type: string): Observable<PlaceSearch> {
      let params = new URLSearchParams();
      params.set('api_key', this.apiKey);
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');
      return this.jsonp
                 .get(this.actionUrlSearch + "movie/list", { search: params })
                 .map(this.extractData).catch(this.handleError);
                 //.map(response => <Movie[]> response.json()[0]).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
