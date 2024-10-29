import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserPreference-new',
  templateUrl: './UserPreference-new.component.html',
  styleUrls: ['./UserPreference-new.component.scss']
})
export class UserPreferenceNewComponent {
  @ViewChild("UserPreferenceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}