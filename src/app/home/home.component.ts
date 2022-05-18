
import { Component, OnInit } from '@angular/core';
import { ThemeSelectorService } from '../services/theme-selector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cssValue   = this.themeSelectorService.cssSelector
  

  constructor( private themeSelectorService : ThemeSelectorService) { }

  ngOnInit(): void {
   
    console.log(this.cssValue);
    
  }

  changeTheme(){
    
  }


}
