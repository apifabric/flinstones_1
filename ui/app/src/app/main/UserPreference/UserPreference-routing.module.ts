import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPreferenceHomeComponent } from './home/UserPreference-home.component';
import { UserPreferenceNewComponent } from './new/UserPreference-new.component';
import { UserPreferenceDetailComponent } from './detail/UserPreference-detail.component';

const routes: Routes = [
  {path: '', component: UserPreferenceHomeComponent},
  { path: 'new', component: UserPreferenceNewComponent },
  { path: ':id', component: UserPreferenceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserPreference-detail-permissions'
      }
    }
  }
];

export const USERPREFERENCE_MODULE_DECLARATIONS = [
    UserPreferenceHomeComponent,
    UserPreferenceNewComponent,
    UserPreferenceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPreferenceRoutingModule { }