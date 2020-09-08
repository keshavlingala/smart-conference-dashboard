import { deviceTypes } from './../../../shared/datagenerator/datagenerator.dev';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  title = "Devices";
  deviceTypes:string[];
  showError:boolean=false;
  loader:boolean=false;
  constructor(private fb: FormBuilder) {

  }

  addDeviceForm: FormGroup;
  ngOnInit(): void {
    this.deviceTypes = deviceTypes;
    this.createForm();
  }
  createForm() {
    this.addDeviceForm = this.fb.group({
    name:  ['', Validators.required ],
    deviceType:   ['', Validators.required ],
    authType: ['', Validators.required ],
    staticMetadata: ['', Validators.required ],
    dynamicMetaData: '',
    });
  }

  onSubmit() {
    if(this.addDeviceForm.invalid)
    {
      this.showError=true;
      return;
    }
    this.showError=false;
    this.loader=true;
    setTimeout(()=>{
      this.loader=false;
      console.log(this.addDeviceForm.value);
      this.addDeviceForm.reset({
        name:  '',
        deviceType: '',
        authType:'',
        staticMetadata: '',
        dynamicMetaData: '',
        });
      },2000)

    }
    showHide(element: HTMLInputElement){
      const textarea = document.getElementById('textarea');
      if(element.checked ==true){
        textarea.style.display ="block";
      }
      else{
        textarea.style.display="none"
      }
    }

}
