import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideHomeComponent } from './home/Guide-home.component';
import { GuideNewComponent } from './new/Guide-new.component';
import { GuideDetailComponent } from './detail/Guide-detail.component';

const routes: Routes = [
  {path: '', component: GuideHomeComponent},
  { path: 'new', component: GuideNewComponent },
  { path: ':id', component: GuideDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Guide-detail-permissions'
      }
    }
  }
];

export const GUIDE_MODULE_DECLARATIONS = [
    GuideHomeComponent,
    GuideNewComponent,
    GuideDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }