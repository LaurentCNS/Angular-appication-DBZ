import { Component, OnInit} from '@angular/core';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = this.articlesService.articles;
  

  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
    
  }

  
  
}
