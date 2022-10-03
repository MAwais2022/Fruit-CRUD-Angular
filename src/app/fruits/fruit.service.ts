import { Inter } from './inter';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor( private http:HttpClient) { }
  get(){
    return this.http.get<Inter[]>("http://localhost:3000/fruits")
  }
  creat(payload:Inter){
    return this.http.post<Inter>("http://localhost:3000/fruits",payload)

  }
  getbyid(id:number){
    return this.http.get<Inter>(`http://localhost:3000/fruits/${id}`)
  }
  update(payload:Inter){
    return this.http.put(`http://localhost:3000/fruits/${payload.id}`,payload)
  }
  delete(id:number){
    return this.http.get<Inter>(`http://localhost:3000/fruits/${id}`)
  }
}
