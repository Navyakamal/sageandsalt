import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit{

  reciData:any={}
    constructor(private ar:ActivatedRoute,private service:ApiService){ }

    ngOnInit(): void {
      //asychronous
      this.ar.params.subscribe((data:any)=>{
        console.log(data.id);
        this.service.getAllRecipes().subscribe((result:any)=>{
          this.reciData=result.recipes.find((i:any)=>i.id==data.id)
          console.log(this.reciData);
          
        })
        
      })
    }
}
