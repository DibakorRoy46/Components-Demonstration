import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent,
    BiographyComponent,
    PartnersComponent,
    CompaniesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CollectionsRoutingModule,
  ]
})
export class CollectionsModule { }
