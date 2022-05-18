import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {
  

   cssSelector !: string ;

  

  
  constructor() { }

  valueEmit(value:string){
    this.cssSelector = value
    // console.log(this.cssSelector);
    
  }

  

}
