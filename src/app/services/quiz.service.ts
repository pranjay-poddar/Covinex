import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }
  
  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'assets/data/covid.json', name: 'Covid' },
      // { id: 'assets/data/mental.json', name: 'Mental' },
      // { id: 'assets/data/pre_covid.json', name: 'Pre Covid' },
      // { id: 'assets/data/post_Covid.json', name: 'Post Covid' }
    ];
  }
}
