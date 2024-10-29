import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Destination-new',
  templateUrl: './Destination-new.component.html',
  styleUrls: ['./Destination-new.component.scss']
})
export class DestinationNewComponent {
  @ViewChild("DestinationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}