import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reciList: any[] = [];
  searchData: string = "";
  mealType: string = 'All'; // Add mealType property

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    // Asynchronous method
    this.service.getAllRecipes().subscribe((response: any) => {
      this.reciList = response.recipes;
      console.log(this.reciList);
    });
  }

  setMealType(type: string) {
    this.mealType = type;
  }
}
