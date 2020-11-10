import { Component, OnInit } from '@angular/core';
import {ArticleData} from './data/data'
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Article Site';
  articles: Article[];

  
  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
