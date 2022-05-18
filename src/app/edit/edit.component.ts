import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  articleEdit !: Article;

  constructor( private articlesSetvice : ArticlesService,
               private activitedRoute : ActivatedRoute, 
               private toastrService: ToastrService,
               private router : Router) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.activitedRoute.snapshot.paramMap.get('id'));
    this.articleEdit = this.articlesSetvice.articleById(id);

  }


submitEdit() : void{
  this.toastrService.info("Article mofifié !");
  this.router.navigate(["/"])
}

}
