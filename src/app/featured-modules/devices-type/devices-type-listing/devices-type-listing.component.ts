import { Component, OnInit} from '@angular/core';
import {DevicesTypeService} from '../../../core/services/devices-type.service';
@Component({
  selector: 'devices-type-listing',
  templateUrl: './devices-type-listing.component.html',
  styleUrls: ['./devices-type-listing.component.scss']
})
export class DevicesTypeListingComponent implements OnInit {

  public devicesTypeData = [];
  public devicesTypeCount = 0;
  public searchedDevicesTypeData = [];

  public currentlyShowingDevicesType;
  
  public config  = {
    perPageData: 6
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
  constructor(private __devicesTypeService: DevicesTypeService){

  }

  ngOnInit(){
    this.getDevicesTypeCount(); 
    this.getDevicesTypeData(0);   
  }

  search(e){
    var str = e.target.value.toLowerCase();
    this.searchedDevicesTypeData=this.devicesTypeData.filter((device)=>{
      if(device.title.toLowerCase().includes(str)){
        return true;
      }
    });
    this.currentlyShowingDevicesType = this.searchedDevicesTypeData;
  }

}
