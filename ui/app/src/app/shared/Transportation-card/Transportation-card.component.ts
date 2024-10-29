import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Transportation-card.component.html',
  styleUrls: ['./Transportation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Transportation-card]': 'true'
  }
})

export class TransportationCardComponent {


}