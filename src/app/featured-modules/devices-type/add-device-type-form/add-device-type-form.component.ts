import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-add-device-type-form',
  templateUrl: './add-device-type-form.component.html',
  styleUrls: ['./add-device-type-form.component.scss']
})
export class AddDeviceTypeFormComponent implements OnInit {

  public deviceTypeForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.deviceTypeForm = this.fb.group({
      name: ['' , Validators.required],
      actions: ['', Validators.required],
      attribute: ['', Validators.required],
      account: ['', Validators.required],
      type:['', Validators.required],
      security: ['', Validators.required],
      anotherAttributes: this.fb.array([])
    });
  }

  get anotherAttributes(){
    return this.deviceTypeForm.get('anotherAttributes') as FormArray;
  }

  addAnotherAttribute(){
    let attribute = this.fb.group({
      name: ['', Validators.required],
      account: ['', Validators.required],
      type: ['',Validators.required],
      security: ['', Validators.required]
    });
    this.anotherAttributes.push(attribute);
  }

  deleteAttribute(i){
    this.anotherAttributes.removeAt(i);
  }
}
