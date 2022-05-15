import { Component, Input, OnInit } from '@angular/core';
import { ARTICLES } from '../data';
import { Article } from '../interfaces/articles';


@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

   articles: Article[] = ARTICLES;
   lastArticles = ARTICLES;


 
  
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.lastArticles);
    
  };

  
  

}
