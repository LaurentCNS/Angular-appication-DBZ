import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  article !: Article;
  articles = Article

  constructor(private activatedRoute: ActivatedRoute,private articlesService : ArticlesService) { }

  ngOnInit(): void {
    // console.log(ARTICLES);
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.article= this.articlesService.articleById(id);   
  }

}
