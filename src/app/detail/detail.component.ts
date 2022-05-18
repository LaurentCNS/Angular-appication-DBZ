import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../class/articles';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;

  article !: Article 
    

  constructor( private activatedRoute: ActivatedRoute,
               private articlesService : ArticlesService,
               private router : Router) { }


  ngOnInit(){
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  this.article = this.articlesService.articleById(id)     
    
  }

 deleteArticle(id?:number){
  this.articlesService.remove(id)
  this.router.navigate(['/admin'])

  }


}
