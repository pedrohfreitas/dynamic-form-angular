import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FieldControlService }    from './fields/field-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FieldControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: any[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
