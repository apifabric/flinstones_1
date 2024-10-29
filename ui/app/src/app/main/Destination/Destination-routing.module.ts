import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationHomeComponent } from './home/Destination-home.component';
import { DestinationNewComponent } from './new/Destination-new.component';
import { DestinationDetailComponent } from './detail/Destination-detail.component';

const routes: Routes = [
  {path: '', component: DestinationHomeComponent},
  { path: 'new', component: DestinationNewComponent },
  { path: ':id', component: DestinationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Destination-detail-permissions'
      }
    }
  },{
    path: ':destination_id/Accommodation', loadChildren: () => import('../Accommodation/Accommodation.module').then(m => m.AccommodationModule),
    data: {
        oPermission: {
            permissionId: 'Accommodation-detail-permissions'
        }
    }
},{
    path: ':destination_id/Booking', loadChildren: () => import('../Booking/Booking.module').then(m => m.BookingModule),
    data: {
        oPermission: {
            permissionId: 'Booking-detail-permissions'
        }
    }
},{
    path: ':destination_id/DestinationActivity', loadChildren: () => import('../DestinationActivity/DestinationActivity.module').then(m => m.DestinationActivityModule),
    data: {
        oPermission: {
            permissionId: 'DestinationActivity-detail-permissions'
        }
    }
},{
    path: ':destination_id/Event', loadChildren: () => import('../Event/Event.module').then(m => m.EventModule),
    data: {
        oPermission: {
            permissionId: 'Event-detail-permissions'
        }
    }
},{
    path: ':destination_id/PackageDestination', loadChildren: () => import('../PackageDestination/PackageDestination.module').then(m => m.PackageDestinationModule),
    data: {
        oPermission: {
            permissionId: 'PackageDestination-detail-permissions'
        }
    }
},{
    path: ':destination_id/Review', loadChildren: () => import('../Review/Review.module').then(m => m.ReviewModule),
    data: {
        oPermission: {
            permissionId: 'Review-detail-permissions'
        }
    }
},{
    path: ':destination_id/Transportation', loadChildren: () => import('../Transportation/Transportation.module').then(m => m.TransportationModule),
    data: {
        oPermission: {
            permissionId: 'Transportation-detail-permissions'
        }
    }
},{
    path: ':preferred_destination_id/UserPreference', loadChildren: () => import('../UserPreference/UserPreference.module').then(m => m.UserPreferenceModule),
    data: {
        oPermission: {
            permissionId: 'UserPreference-detail-permissions'
        }
    }
}
];

export const DESTINATION_MODULE_DECLARATIONS = [
    DestinationHomeComponent,
    DestinationNewComponent,
    DestinationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }