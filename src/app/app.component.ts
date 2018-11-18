import { Component }       from '@angular/core';

import { FieldService } from './fields/field.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-dynamic-form [fields]="fields"></app-dynamic-form>
    </div>
  `,
  providers:  [FieldService]
})
export class AppComponent {
  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.getFields();
  }
}
