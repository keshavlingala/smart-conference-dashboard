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
  loader:boolean=false;
  constructor(private fb: FormBuilder) {

  }

  updatesForm: FormGroup;
  ngOnInit(): void {
    this.deviceTypes=['Device Type A','Device Type B','Device Type C']
    this.createForm();
  }
  createForm() {
    this.updatesForm = this.fb.group({
    name:  ['', Validators.required ],
    deviceType:  '1',
    authType: ['', Validators.required ],
    staticMetadata: ['', Validators.required ],
    dynamicMetaData: '',
    });
  }

  onSubmit() {
    this.loader=true;
    setInterval(()=>{
      this.loader=false;
      console.log(this.updatesForm.value);
      this.updatesForm.reset({
        name:  '',
        deviceType:  '1',
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
