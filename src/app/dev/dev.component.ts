import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from '../class/articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  
  articleForm : Article = new Article();

  constructor(private router: Router, private toastrService: ToastrService,private articlesService : ArticlesService) { }

  ngOnInit(): void {
  }

articleSubmit(){
  this.articlesService.addArticle(this.articleForm);
  this.toastrService.success("Article ajouté","Félicitations");
  this.router.navigate(["/"])
  console.log(this.articleForm);  
}

}
