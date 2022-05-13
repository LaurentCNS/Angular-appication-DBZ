import { Component } from '@angular/core';
import { ConsArticle } from './class/consArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbz';
  articleRead !: ConsArticle;
 


  articleSend($event : ConsArticle){
    this.articleRead = $event;
  }

}
