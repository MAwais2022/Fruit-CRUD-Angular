import { FruitService } from './../fruit.service';
import { Inter } from './../inter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
fruitform:Inter ={
id:0,
name:'',
quantity:0,
price:0

}
  constructor(private fruitservecs:FruitService , private router:Router) { }
 
  ngOnInit(): void {
  }

  creat(){
    this.fruitservecs.creat(this.fruitform)
    .subscribe({
      next:(data)=>{
        this.router.navigate(["./fruits/home"])
      },
        error:(error) => {
          console.error(error);
        }
        
    })
  }

}
