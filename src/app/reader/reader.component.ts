import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    console.log(ARTICLES);
    
  }

}
