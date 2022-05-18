import { Component, OnInit } from '@angular/core';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';
import { faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[] = this.articlesService.articles;
  faEye = faEye;




  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
    console.log(this.articles);
    
  }

}
