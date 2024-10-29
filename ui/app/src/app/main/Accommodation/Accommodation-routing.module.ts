import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationHomeComponent } from './home/Accommodation-home.component';
import { AccommodationNewComponent } from './new/Accommodation-new.component';
import { AccommodationDetailComponent } from './detail/Accommodation-detail.component';

const routes: Routes = [
  {path: '', component: AccommodationHomeComponent},
  { path: 'new', component: AccommodationNewComponent },
  { path: ':id', component: AccommodationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Accommodation-detail-permissions'
      }
    }
  }
];

export const ACCOMMODATION_MODULE_DECLARATIONS = [
    AccommodationHomeComponent,
    AccommodationNewComponent,
    AccommodationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationRoutingModule { }