import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DestinationActivity-new',
  templateUrl: './DestinationActivity-new.component.html',
  styleUrls: ['./DestinationActivity-new.component.scss']
})
export class DestinationActivityNewComponent {
  @ViewChild("DestinationActivityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}