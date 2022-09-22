import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModuleHomeComponent } from './module-home/module-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    ModuleHomeComponent,
    ModalComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
