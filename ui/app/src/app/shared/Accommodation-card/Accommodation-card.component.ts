import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Accommodation-card.component.html',
  styleUrls: ['./Accommodation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Accommodation-card]': 'true'
  }
})

export class AccommodationCardComponent {


}