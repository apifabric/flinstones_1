import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DESTINATIONACTIVITY_MODULE_DECLARATIONS, DestinationActivityRoutingModule} from  './DestinationActivity-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DestinationActivityRoutingModule
  ],
  declarations: DESTINATIONACTIVITY_MODULE_DECLARATIONS,
  exports: DESTINATIONACTIVITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DestinationActivityModule { }