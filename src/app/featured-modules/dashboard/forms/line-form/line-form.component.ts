import {Component} from '@angular/core';
import {CustomForm} from '../custom-form.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements CustomForm {

  form: FormGroup = this.fb.group({
    lastDataSince: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder
  ) {
  }
}
