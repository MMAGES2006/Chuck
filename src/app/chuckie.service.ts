import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckieService {

  private apiUrl = 'https://api.chucknorris.io/jokes/categories'
  private JokeUrl = 'https://api.chucknorris.io/jokes/random'

  constructor(private http: HttpClient) { }

  getlistChuck(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getJokes(): Observable<any>
  {
    return this.http.get(`${this.JokeUrl}`);
  }
}
