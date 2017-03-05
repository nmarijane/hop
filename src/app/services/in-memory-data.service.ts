import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let genres = [
      {id: 1, label: 'Action'},
      {id: 2, label: 'Adventure'},
      {id: 3, label: 'Animation'},
      {id: 4, label: 'Comedy'},
      {id: 5, label: 'Crime'},
      {id: 6, label: 'Documentary'},
      {id: 7, label: 'Drama'},
      {id: 8, label: 'Family'},
      {id: 9, label: 'Fantasy'},
      {id: 10, label: 'Foreign'},
      {id: 11, label: 'History'},
      {id: 12, label: 'Horror'},
      {id: 13, label: 'Music'},
      {id: 14, label: 'Mystery'},
      {id: 15, label: 'Romance'},
      {id: 16, label: 'Science Fiction'},
      {id: 17, label: 'TV movie'},
      {id: 18, label: 'Thriller'},
      {id: 19, label: 'War'},
      {id: 20, label: 'Western'}
    ];
    return {genres};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
