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
      // { id: 'assets/data/csharp.json', name: 'C Sharp' },
      // { id: 'assets/data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
}
