import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ACCOMMODATION_MODULE_DECLARATIONS, AccommodationRoutingModule} from  './Accommodation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AccommodationRoutingModule
  ],
  declarations: ACCOMMODATION_MODULE_DECLARATIONS,
  exports: ACCOMMODATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccommodationModule { }