import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from '../class/articles';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  articleForm = new Article();

  constructor(private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

articleSubmit(){
  this.toastrService.success("Article ajouté","Félicitations");
  this.router.navigate(["/"])
  //console.log(this.articleForm);  
}

}
