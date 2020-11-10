export class Article {
  title : string;
  link : string;
  point : number;

  constructor (t : string, l : string, point:number){
    this.title = t;
    this.link = l;
    this.point = point;
  }
}
