import { Component, OnInit } from '@angular/core';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[] = this.articlesService.articles;
  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
    //console.log(this.articles);
    
  }

}
