import { Component, OnInit} from '@angular/core';
import {DevicesTypeService} from '../../../core/services/devices-type.service';

import {CommonLoaderService} from '../../../core/services/common-loader.service';
@Component({
  selector: 'devices-type-listing',
  templateUrl: './devices-type-listing.component.html',
  styleUrls: ['./devices-type-listing.component.scss']
})
export class DevicesTypeListingComponent implements OnInit{

  public devicesTypeData;
  public devicesTypeCount = 0;
  public currentlyShowingDevicesType;
  
  public config  = {
    perPageData: 8
  }

  
  getDevicesTypeCount(){
    this.devicesTypeCount = this.__devicesTypeService.getDevicesTypeCount();
  }

  getDevicesTypeData(pageNumber){
    let start = pageNumber*this.config.perPageData;
    let end = start + this.config.perPageData;
    this.devicesTypeData = this.__devicesTypeService.getDevicesTypeData(start,end);
    this.currentlyShowingDevicesType = this.devicesTypeData;
  }
  constructor(private __devicesTypeService: DevicesTypeService, private loader: CommonLoaderService){
  
  }

  ngOnInit(){
      this.getDevicesTypeCount(); 
      this.getDevicesTypeData(0); 
  }

  search(e){
    var str = e.target.value.toLowerCase();
    this.currentlyShowingDevicesType=this.devicesTypeData.filter((device)=>{
      if(device.deviceType.toLowerCase().includes(str)){
        return true;
      }
    });
  }

}
