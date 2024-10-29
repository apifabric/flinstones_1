import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PackageDestination-new',
  templateUrl: './PackageDestination-new.component.html',
  styleUrls: ['./PackageDestination-new.component.scss']
})
export class PackageDestinationNewComponent {
  @ViewChild("PackageDestinationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}