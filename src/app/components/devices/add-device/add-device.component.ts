import { deviceTypes } from './../../../shared/datagenerator/datagenerator.dev';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
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
    deviceName:  ['', Validators.required ],
    deviceType:   ['', Validators.required ],
    certificate: ['', Validators.required ],
    staticD: ['', Validators.required ],
    dynamicD: '',
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
      const {deviceName,deviceType,certificate,staticD,dynamicD} = this.addDeviceForm.value;
      const update={
        deviceName : deviceName,
        deviceType: deviceType,
        certificate: certificate,
        metadata: {
          static : staticD,
          dynamic: dynamicD,
        }
      }
      console.log(update);
      this.addDeviceForm.markAllAsTouched();
      this.addDeviceForm.reset();
      this.myForm.resetForm();
      },700)

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
