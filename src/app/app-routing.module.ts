import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DetailComponent } from './detail/detail.component';
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
  { path: 'admin', component: AdminComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


