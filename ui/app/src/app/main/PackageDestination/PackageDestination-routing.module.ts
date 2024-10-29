import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageDestinationHomeComponent } from './home/PackageDestination-home.component';
import { PackageDestinationNewComponent } from './new/PackageDestination-new.component';
import { PackageDestinationDetailComponent } from './detail/PackageDestination-detail.component';

const routes: Routes = [
  {path: '', component: PackageDestinationHomeComponent},
  { path: 'new', component: PackageDestinationNewComponent },
  { path: ':id', component: PackageDestinationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PackageDestination-detail-permissions'
      }
    }
  }
];

export const PACKAGEDESTINATION_MODULE_DECLARATIONS = [
    PackageDestinationHomeComponent,
    PackageDestinationNewComponent,
    PackageDestinationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageDestinationRoutingModule { }