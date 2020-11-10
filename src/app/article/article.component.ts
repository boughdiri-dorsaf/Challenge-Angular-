import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input ("article") articleList;
  point : number[];
  constructor() { }

  ngOnInit() {
  }

  upvote(i){
    this.articleList[i].point += 1;
  }

  downvote(i){
    if(
      this.articleList[i].point >1)
      this.articleList[i].point -= 1;
  }

}
