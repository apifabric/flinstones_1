import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PACKAGEDESTINATION_MODULE_DECLARATIONS, PackageDestinationRoutingModule} from  './PackageDestination-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PackageDestinationRoutingModule
  ],
  declarations: PACKAGEDESTINATION_MODULE_DECLARATIONS,
  exports: PACKAGEDESTINATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PackageDestinationModule { }