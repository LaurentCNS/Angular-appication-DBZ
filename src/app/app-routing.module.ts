import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ReaderComponent } from './reader/reader.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'main', component: MainComponent },
  {path: 'reader/:id', component: ReaderComponent},
  {path: 'bookmark', component: BookmarkComponent},
  { path: 'dev', component: DevComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


