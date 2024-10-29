import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRANSPORTATION_MODULE_DECLARATIONS, TransportationRoutingModule} from  './Transportation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TransportationRoutingModule
  ],
  declarations: TRANSPORTATION_MODULE_DECLARATIONS,
  exports: TRANSPORTATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransportationModule { }