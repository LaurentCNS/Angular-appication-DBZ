import { Component, Input, OnInit } from '@angular/core';
import { ConsArticle } from '../class/consArticle';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  @Input() articleRead !: ConsArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
