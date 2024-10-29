import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GUIDE_MODULE_DECLARATIONS, GuideRoutingModule} from  './Guide-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GuideRoutingModule
  ],
  declarations: GUIDE_MODULE_DECLARATIONS,
  exports: GUIDE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GuideModule { }