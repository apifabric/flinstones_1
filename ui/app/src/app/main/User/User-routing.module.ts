import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':user_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
},{
    path: ':user_id/UserPreference', loadChildren: () => import('../UserPreference/UserPreference.module').then(m => m.UserPreferenceModule),
    data: {
        oPermission: {
            permissionId: 'UserPreference-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }