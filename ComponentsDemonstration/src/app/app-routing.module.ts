import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collections/collection-home/collection-home.component';
import { ElementHomeComponent } from './elements/element-home/element-home.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  { 
    path:'',
    loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule
  )},
  { 
    path:'',
    loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
  },
  {
    path:'',
    loadChildren:()=>import('./not-found/not-found.module').then(m=>m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
