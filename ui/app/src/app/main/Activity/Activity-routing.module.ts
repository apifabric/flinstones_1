import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityHomeComponent } from './home/Activity-home.component';
import { ActivityNewComponent } from './new/Activity-new.component';
import { ActivityDetailComponent } from './detail/Activity-detail.component';

const routes: Routes = [
  {path: '', component: ActivityHomeComponent},
  { path: 'new', component: ActivityNewComponent },
  { path: ':id', component: ActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Activity-detail-permissions'
      }
    }
  },{
    path: ':activity_id/DestinationActivity', loadChildren: () => import('../DestinationActivity/DestinationActivity.module').then(m => m.DestinationActivityModule),
    data: {
        oPermission: {
            permissionId: 'DestinationActivity-detail-permissions'
        }
    }
},{
    path: ':activity_id/Guide', loadChildren: () => import('../Guide/Guide.module').then(m => m.GuideModule),
    data: {
        oPermission: {
            permissionId: 'Guide-detail-permissions'
        }
    }
},{
    path: ':preferred_activity_id/UserPreference', loadChildren: () => import('../UserPreference/UserPreference.module').then(m => m.UserPreferenceModule),
    data: {
        oPermission: {
            permissionId: 'UserPreference-detail-permissions'
        }
    }
}
];

export const ACTIVITY_MODULE_DECLARATIONS = [
    ActivityHomeComponent,
    ActivityNewComponent,
    ActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }