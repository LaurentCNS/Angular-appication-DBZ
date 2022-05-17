import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {
  @Input() selectorSent !: string;

   test : string = 'this.selectorSent'

  cssFromService = this.selectorSent
  
  
  constructor() { }
}
