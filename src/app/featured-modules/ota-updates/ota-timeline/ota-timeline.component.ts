import {Component, OnInit} from '@angular/core';
import {DataViewConfig} from "../../../common/data-view/models/timeline.model";
import {OtaServiceService} from "../ota-service.service";
import {DevicesTypeService} from '../../../core/services/devices-type.service';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";
import {CommonLoaderService} from '../../../core/services/common-loader.service';

@Component({
  selector: 'app-ota-timeline',
  templateUrl: './ota-timeline.component.html',
  styleUrls: ['./ota-timeline.component.css']
})
export class OtaTimelineComponent implements OnInit {
  dataViewConfig = [];
  devicesType:string[];
  constructor(
    private otaService: OtaServiceService,
    private devicesTypeService: DevicesTypeService,
    private commonLoader: CommonLoaderService
  ) {
  }

  add($event: string): void {
    console.log($event);
  }

  ngOnInit() {
    this.devicesType = this.devicesTypeService.getAllDevicesTypeName();
  }

  async deviceTypeChanged(deviceType){
    this.commonLoader.appendLoaderComponentToBody();
    const res = await this.otaService.getOtaResponse().toPromise();
    const types = {};
    res.data.ota.forEach(ota => {
      if (ota.deviceType in types) {
        types[ota.deviceType].push(ota.ota)
      } else {
        types[ota.deviceType] = [ota.ota]
      }
    })
    Object.keys(types).forEach(key => {
      types[key] = types[key].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    })
    this.dataViewConfig = types[deviceType];
    this.commonLoader.removeLoaderComponentFromBody();
  }

  filterRes(key: string) {
    key = key.toLowerCase();
    this.dataViewConfig = this.dataViewConfig.filter(ota => {
      return ota.createdAt.toLowerCase().includes(key);
    })
  }


  dateChange($event: MatDatepickerInputEvent<unknown, unknown>) {
    const pipe = new DatePipe('en-US');
    const key = pipe.transform($event.value, 'MMM')
    this.filterRes(key);
  }
}
