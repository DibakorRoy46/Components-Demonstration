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
    path:'elements',
    loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule
  )},
  { 
    path:'collections',
    loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
  },
  { 
    path:'views',
    loadChildren:()=>import('./views/views.module').then(m=>m.ViewsModule)
  },
  { 
    path:'modules',
    loadChildren:()=>import('./modules/modules.module').then(m=>m.ModulesModule)
  },
  {
    path:'**',
    loadChildren:()=>import('./not-found/not-found.module').then(m=>m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
