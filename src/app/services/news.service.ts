import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NewsResponse, Article } from '../interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines(): Observable<Article[]> {
    return this.http.get<NewsResponse>("https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=b54e2e1a1d9344db94cc2c625cbaad47")
    .pipe(
      map( response => response.articles )
    );
  }
}
