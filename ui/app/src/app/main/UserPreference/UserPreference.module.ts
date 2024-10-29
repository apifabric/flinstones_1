import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERPREFERENCE_MODULE_DECLARATIONS, UserPreferenceRoutingModule} from  './UserPreference-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserPreferenceRoutingModule
  ],
  declarations: USERPREFERENCE_MODULE_DECLARATIONS,
  exports: USERPREFERENCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserPreferenceModule { }