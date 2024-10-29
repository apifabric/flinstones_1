import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Accommodation-new',
  templateUrl: './Accommodation-new.component.html',
  styleUrls: ['./Accommodation-new.component.scss']
})
export class AccommodationNewComponent {
  @ViewChild("AccommodationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}