import { FruitService } from './../fruit.service';
import { Component, OnInit } from '@angular/core';
import { Inter } from '../inter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  fruitform:Inter ={
    id:0,
    name:'',
    quantity:0,
    price:0
  }
  constructor(private fruitservecs:FruitService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number (param.get('id'));
      this.getbyid(id);
    })
  }
  getbyid(id:number){
     this.fruitservecs.getbyid(id)
     .subscribe((data) => {
      this.fruitform = data;
     })
  }
  update(){
    this.fruitservecs.update(this.fruitform)
    .subscribe({
      next:(data) => {
        this.router.navigate(["fruits/home"])
      },
      error:(error) => {
        console.log(error);
      }
    })
  }
}
