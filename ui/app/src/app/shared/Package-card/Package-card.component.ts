import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Package-card.component.html',
  styleUrls: ['./Package-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Package-card]': 'true'
  }
})

export class PackageCardComponent {


}