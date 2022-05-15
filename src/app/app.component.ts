import { Component, Input, Output } from '@angular/core';
import { ConsArticle } from './class/consArticle';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbz';
  articleRead !: ConsArticle;

  
  
  @Input() articleLasted !: [];
  @Input() selectorSent !: string;


  

  ngOnInit(): void {
    //console.log(this.selectorSent);  
    }


  articleSend($event : ConsArticle){
    this.articleRead = $event;
  }

}
