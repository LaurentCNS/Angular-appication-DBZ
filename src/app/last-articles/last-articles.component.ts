import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';
import { faBookmark, faBookOpenReader} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

   articles: Article[] = this.articlesService.articles;
   faBookmark = faBookmark;
   faBook = faBookOpenReader;


 
  
  

  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
   // console.log(this.lastArticles);
    
  };

  
  

}
