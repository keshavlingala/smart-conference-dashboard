import { DevicesCardData } from './../models/models';
import { DevicesService } from './../../../core/services/devices.service';
import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DevicesGroupService} from '../../../core/services/devices-group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit, OnDestroy{
  groupData:any;
  routeParamsSubscription:any;
  devicesDataMappedToCardData: DevicesCardData[];
  constructor(private route: ActivatedRoute, private __devicesGroup: DevicesGroupService, private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe(params=>{
      this.groupData = this.__devicesGroup.getDeviceGroupById(params.id);
      let devicesData = this.getDevicesData();
      this.devicesDataMappedToCardData =  this.mapDevicesDataToCardData(devicesData);
    })
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

  DatafromCard(e){
    console.log(e);
  }


  dataOfPages(e){
    console.log(e)
  }


  ngOnDestroy(){
    this.routeParamsSubscription.unsubscribe();
  }
  
  
}
