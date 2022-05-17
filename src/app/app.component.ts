import { CssSelector } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbz';  
  
  @Input() articleLasted !: [];
  @Input() selectorSent !: string;
  
  
  
  cssSelector !: string

  

  ngOnInit(): void {
      
    }



  selectorGet(type:string) : void {
    this.cssSelector = type;    
   // console.log(this.cssSelector);
  }

}
