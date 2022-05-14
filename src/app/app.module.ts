import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { ReaderComponent } from './reader/reader.component';
import { HomeComponent } from './home/home.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LastArticlesComponent } from './last-articles/last-articles.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ArticlesComponent,
    ReaderComponent,
    HomeComponent,
    FooterNavComponent,
    LastArticlesComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
