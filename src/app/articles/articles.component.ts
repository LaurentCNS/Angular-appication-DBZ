import { Component, OnInit} from '@angular/core';
import { ARTICLES } from '../data';
import { Article } from '../class/articles';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = ARTICLES;
  allArticles = ARTICLES;

  constructor() { }

  ngOnInit(): void {
    
  }

  
  
}
