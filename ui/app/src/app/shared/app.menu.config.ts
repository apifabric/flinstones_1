import { MenuRootItem } from 'ontimize-web-ngx';

import { AccommodationCardComponent } from './Accommodation-card/Accommodation-card.component';

import { ActivityCardComponent } from './Activity-card/Activity-card.component';

import { BookingCardComponent } from './Booking-card/Booking-card.component';

import { DestinationCardComponent } from './Destination-card/Destination-card.component';

import { DestinationActivityCardComponent } from './DestinationActivity-card/DestinationActivity-card.component';

import { EventCardComponent } from './Event-card/Event-card.component';

import { GuideCardComponent } from './Guide-card/Guide-card.component';

import { PackageCardComponent } from './Package-card/Package-card.component';

import { PackageDestinationCardComponent } from './PackageDestination-card/PackageDestination-card.component';

import { ReviewCardComponent } from './Review-card/Review-card.component';

import { TransportationCardComponent } from './Transportation-card/Transportation-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserPreferenceCardComponent } from './UserPreference-card/UserPreference-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Accommodation', name: 'ACCOMMODATION', icon: 'view_list', route: '/main/Accommodation' }
    
        ,{ id: 'Activity', name: 'ACTIVITY', icon: 'view_list', route: '/main/Activity' }
    
        ,{ id: 'Booking', name: 'BOOKING', icon: 'view_list', route: '/main/Booking' }
    
        ,{ id: 'Destination', name: 'DESTINATION', icon: 'view_list', route: '/main/Destination' }
    
        ,{ id: 'DestinationActivity', name: 'DESTINATIONACTIVITY', icon: 'view_list', route: '/main/DestinationActivity' }
    
        ,{ id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'Guide', name: 'GUIDE', icon: 'view_list', route: '/main/Guide' }
    
        ,{ id: 'Package', name: 'PACKAGE', icon: 'view_list', route: '/main/Package' }
    
        ,{ id: 'PackageDestination', name: 'PACKAGEDESTINATION', icon: 'view_list', route: '/main/PackageDestination' }
    
        ,{ id: 'Review', name: 'REVIEW', icon: 'view_list', route: '/main/Review' }
    
        ,{ id: 'Transportation', name: 'TRANSPORTATION', icon: 'view_list', route: '/main/Transportation' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserPreference', name: 'USERPREFERENCE', icon: 'view_list', route: '/main/UserPreference' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AccommodationCardComponent

    ,ActivityCardComponent

    ,BookingCardComponent

    ,DestinationCardComponent

    ,DestinationActivityCardComponent

    ,EventCardComponent

    ,GuideCardComponent

    ,PackageCardComponent

    ,PackageDestinationCardComponent

    ,ReviewCardComponent

    ,TransportationCardComponent

    ,UserCardComponent

    ,UserPreferenceCardComponent

];