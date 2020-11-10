import { Component, OnInit } from '@angular/core';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'simple-reddit';

  articleList : Article[];
  article : Article;

  addlink(title : string, link : string){
    this.article = new Article(title,link,1);
    this.articleList.push(this.article);
  }

  ngOnInit(){
    this.articleList = [
      new Article("angular","angular.io",1),
      new Article("fullstack","fullstack.io",1),
    ]


  }
}
