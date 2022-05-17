import { Component, OnInit } from '@angular/core';
import { ThemeSelectorService } from '../services/theme-selector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cssValue !: string

  constructor( private themeSelectorService : ThemeSelectorService) { }

  ngOnInit(): void {
    this.cssValue = this.themeSelectorService.cssFromService
    console.log(this.cssValue); 
  }

  changeTheme(){
    
  }


}
