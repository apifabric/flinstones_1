import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationHomeComponent } from './home/Transportation-home.component';
import { TransportationNewComponent } from './new/Transportation-new.component';
import { TransportationDetailComponent } from './detail/Transportation-detail.component';

const routes: Routes = [
  {path: '', component: TransportationHomeComponent},
  { path: 'new', component: TransportationNewComponent },
  { path: ':id', component: TransportationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Transportation-detail-permissions'
      }
    }
  }
];

export const TRANSPORTATION_MODULE_DECLARATIONS = [
    TransportationHomeComponent,
    TransportationNewComponent,
    TransportationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationRoutingModule { }