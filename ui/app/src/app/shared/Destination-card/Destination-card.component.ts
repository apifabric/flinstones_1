import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Destination-card.component.html',
  styleUrls: ['./Destination-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Destination-card]': 'true'
  }
})

export class DestinationCardComponent {


}