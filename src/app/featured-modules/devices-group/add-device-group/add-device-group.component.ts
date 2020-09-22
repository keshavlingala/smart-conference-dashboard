import { DevicesCardData } from './../models/models';
import { DevicesService } from './../../../core/services/devices.service';
import { DevicesGroupService } from './../../../core/services/devices-group.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { StepperSelectionEvent } from "@angular/cdk/stepper";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device-group',
  templateUrl: './add-device-group.component.html',
  styleUrls: ['./add-device-group.component.scss']
})
export class AddDeviceGroupComponent implements OnInit {



  DeviceGroupForm: FormGroup;
  selectedCard = [];
  selectedIndex = 0;
  deviceTypeClone;
  finalData = [];

  result = {
    "groupName": "",
    "deviceTypes": [],
    "groupType": "",
    "devices": []
  }

  tempData =[];
  DeviceType = []
 
  constructor(private fb: FormBuilder, private DevicesGroupService: DevicesGroupService, private devicesService: DevicesService) { }
  ngOnInit(): void {

    let devicesData = this.getDevicesData();
    let mappedData:DevicesCardData[] = this.mapDevicesDataToCardData(devicesData);
    this.tempData = mappedData;
    let array = [];
    let deviceTypeData = this.DevicesGroupService.getdeviceTypeData();
    deviceTypeData.data.types.forEach((data) => {
      let id = data._id;
      let deviceType = data.deviceType;
      let a = {
        id: id,
        item_text: deviceType
      }
      array.push(a);
    });
    this.DeviceType = array;


    this.deviceTypeClone = JSON.stringify(this.DeviceType);
    this.DeviceGroupForm = this.fb.group({
      GroupName: ['', Validators.required],
      GroupType: [''],
      DeviceType: [[], [Validators.required, Validators.minLength(2)]]
    });


  }

  getDevicesData() {
    return this.devicesService.getAllDevices();
  }

  mapDevicesDataToCardData(devicesData):DevicesCardData[] {
    // card data contains header, content, footer
    // this function will map device name to header, device type to content
    // and id to footer
    let mappedData: DevicesCardData[];
    mappedData = devicesData.map(device => {
      return {
        id: device._id,
        Title: device.name,
        Content: device.type.deviceType,
        Footer: device._id,
        Date: device.createdAt
      }
    });
    return mappedData;
  }






  selectionChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === 0) {
      this.DeviceGroupForm.enable()
    } else {
      this.DeviceGroupForm.disable();
    }
  }
  filterDropdown(e) {

    if (e.target.value === "") {
      this.DeviceType = JSON.parse(this.deviceTypeClone);
      return;
    }
    this.DeviceType = JSON.parse(this.deviceTypeClone).filter((d) => {
      var text = d.item_text.toLowerCase();
      var searchValue = e.target.value.toLowerCase();
      if (text.includes(searchValue)) {
        return d.id;
      };
    })


  }

  // Catching Event from Card
  DatafromCard(event) {
    this.selectedCard = event.selected.map(String);
    this.finalData.push(this.DeviceGroupForm.value);
   
    var dummy = [];
    if (this.DeviceGroupForm.controls['GroupType'].value === 'Single') {

      this.result.deviceTypes.push(this.DeviceGroupForm.controls['DeviceType'].value.item_text);
    }
    if (this.DeviceGroupForm.controls['GroupType'].value === 'Multi') {
      // this.DeviceGroupForm.controls['DeviceType'].value.map(data=>{ dummy.push(data.item_text)});
      this.DeviceGroupForm.controls['DeviceType'].value.map(data => { this.DeviceType.map((d) => { if (d.id == data) { dummy.push(d.item_text) } }) });
      this.result.deviceTypes = dummy;
    }
    this.result.groupType = this.DeviceGroupForm.controls['GroupType'].value;
    this.result.groupName = this.DeviceGroupForm.controls['GroupName'].value;
    this.result.devices = this.selectedCard;
    console.log(this.result);
  }

  toggleCalled() {
    this.DeviceGroupForm.controls['DeviceType'].setValue('');
    this.result.deviceTypes = [];
    this.DeviceType = JSON.parse(this.deviceTypeClone);
  }
}

