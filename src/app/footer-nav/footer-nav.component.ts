import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBookmark,faListUl ,faCode, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeSelectorService } from '../services/theme-selector.service';


@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {

  @Output() selectorSent : EventEmitter<string> = new EventEmitter<string>();

  faHome = faHome;
  faListUl = faListUl;
  faBookmark = faBookmark;
  faSun = faSun;
  faMoon = faMoon;
  faCode = faCode;
  activeSelector : string = 'sun';

  
  

  constructor( private themeSelectorService : ThemeSelectorService ) { }

  ngOnInit(): void {
  }
  
  changeTheme(clickChange : string) : void{
    this.activeSelector = clickChange;
    this.selectorSent.emit(this.activeSelector); 
    this.themeSelectorService.valueEmit(this.activeSelector)
    //console.log(this.selectorSent.emit(this.activeSelector));   
  }

}

