import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //api to fetch all recipes
  getAllRecipes(){
    return this.http.get('/assets/recipes.json')
  }
}
