import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"single-view/:id",component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
