import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationActivityHomeComponent } from './home/DestinationActivity-home.component';
import { DestinationActivityNewComponent } from './new/DestinationActivity-new.component';
import { DestinationActivityDetailComponent } from './detail/DestinationActivity-detail.component';

const routes: Routes = [
  {path: '', component: DestinationActivityHomeComponent},
  { path: 'new', component: DestinationActivityNewComponent },
  { path: ':id', component: DestinationActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DestinationActivity-detail-permissions'
      }
    }
  }
];

export const DESTINATIONACTIVITY_MODULE_DECLARATIONS = [
    DestinationActivityHomeComponent,
    DestinationActivityNewComponent,
    DestinationActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationActivityRoutingModule { }