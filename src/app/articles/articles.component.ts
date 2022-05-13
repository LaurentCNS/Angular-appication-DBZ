import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConsArticle } from '../class/consArticle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() article : ConsArticle = new ConsArticle ('demo','demo','demo','demo','demo');
  @Output() articleEmitter : EventEmitter<ConsArticle> = new EventEmitter<ConsArticle>();

  constructor() { }

  ngOnInit(): void {
  }

  articleSelect(): void {
    this.articleEmitter.emit(this.article)
  }
}
