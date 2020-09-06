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
      deviceType: ['' , Validators.required],
      actions: ['', Validators.required],
      attributes: this.fb.array([])
    });

    this.addAnotherAttribute();
  }

  get attributes(){
    return this.deviceTypeForm.get('attributes') as FormArray;
  }

  get actions(){
    return this.deviceTypeForm.get('actions');
  }

  
  addAnotherAttribute(){
    let attribute = this.fb.group({
      name: ['', Validators.required],
      accId: ['', Validators.required],
      dataType: ['',Validators.required],
      securitySetting: ['', Validators.required]
    });
    this.attributes.push(attribute);
  }

  deleteAttribute(i){
    this.attributes.removeAt(i);
  }

  onFormSubmit(){
    this.deviceTypeForm.value.actions = this.deviceTypeForm.value.actions.split(','); //convert array into actions
    this.deviceTypeForm.value.attributes.forEach(attribute=>{
      attribute.accId = [attribute.accId];
    })
    console.log(JSON.stringify(this.deviceTypeForm.value));
  }
}
