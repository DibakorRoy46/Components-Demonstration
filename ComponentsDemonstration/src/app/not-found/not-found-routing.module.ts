import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundHomeComponent } from './not-found-home/not-found-home.component';

const routes: Routes = [
  {
    path:'**',
    component:NotFoundHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
