import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DESTINATION_MODULE_DECLARATIONS, DestinationRoutingModule} from  './Destination-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DestinationRoutingModule
  ],
  declarations: DESTINATION_MODULE_DECLARATIONS,
  exports: DESTINATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DestinationModule { }