import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DestinationActivity-card.component.html',
  styleUrls: ['./DestinationActivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DestinationActivity-card]': 'true'
  }
})

export class DestinationActivityCardComponent {


}