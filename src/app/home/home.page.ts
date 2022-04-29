import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public articles: Article[] = [];

  constructor( private newsapi: NewsService ) {}

  ngOnInit(): void {
    this.newsapi.getTopHeadLines()
      .subscribe(articles => {
        this.articles.push(...articles);
      });
  }

}
