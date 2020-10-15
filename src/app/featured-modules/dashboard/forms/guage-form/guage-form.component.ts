import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomForm} from '../custom-form.interface';

@Component({
  selector: 'app-guage-form',
  templateUrl: './guage-form.component.html',
  styleUrls: ['./guage-form.component.scss']
})
export class GuageFormComponent implements CustomForm {
  form: FormGroup = this.fb.group({
    min: [null, [Validators.required]],
    max: [null, [Validators.required]]
  });


  constructor(
    private fb: FormBuilder
  ) {
  }


}

