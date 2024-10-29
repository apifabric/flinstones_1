import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Guide-card.component.html',
  styleUrls: ['./Guide-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Guide-card]': 'true'
  }
})

export class GuideCardComponent {


}