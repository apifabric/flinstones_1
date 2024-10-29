import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PackageDestination-card.component.html',
  styleUrls: ['./PackageDestination-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PackageDestination-card]': 'true'
  }
})

export class PackageDestinationCardComponent {


}