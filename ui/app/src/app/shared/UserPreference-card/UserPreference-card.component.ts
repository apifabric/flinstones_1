import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserPreference-card.component.html',
  styleUrls: ['./UserPreference-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserPreference-card]': 'true'
  }
})

export class UserPreferenceCardComponent {


}