import { Component, OnInit } from '@angular/core';
import { faBookmark,faListUl ,faCode, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {
  faHome = faHome;
  faListUl = faListUl;
  faBookmark = faBookmark;
  faSun = faSun;
  faMoon = faMoon;
  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}

