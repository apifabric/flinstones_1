import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Accommodation', loadChildren: () => import('./Accommodation/Accommodation.module').then(m => m.AccommodationModule) },
    
        { path: 'Activity', loadChildren: () => import('./Activity/Activity.module').then(m => m.ActivityModule) },
    
        { path: 'Booking', loadChildren: () => import('./Booking/Booking.module').then(m => m.BookingModule) },
    
        { path: 'Destination', loadChildren: () => import('./Destination/Destination.module').then(m => m.DestinationModule) },
    
        { path: 'DestinationActivity', loadChildren: () => import('./DestinationActivity/DestinationActivity.module').then(m => m.DestinationActivityModule) },
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'Guide', loadChildren: () => import('./Guide/Guide.module').then(m => m.GuideModule) },
    
        { path: 'Package', loadChildren: () => import('./Package/Package.module').then(m => m.PackageModule) },
    
        { path: 'PackageDestination', loadChildren: () => import('./PackageDestination/PackageDestination.module').then(m => m.PackageDestinationModule) },
    
        { path: 'Review', loadChildren: () => import('./Review/Review.module').then(m => m.ReviewModule) },
    
        { path: 'Transportation', loadChildren: () => import('./Transportation/Transportation.module').then(m => m.TransportationModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserPreference', loadChildren: () => import('./UserPreference/UserPreference.module').then(m => m.UserPreferenceModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }