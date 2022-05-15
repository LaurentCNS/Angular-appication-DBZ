import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLES } from '../data';
import { Article } from '../interfaces/articles';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  article !: Article;
  articles = ARTICLES

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(ARTICLES);
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.article= this.articles.filter(article => article.id === id)[0];   
  }

}
