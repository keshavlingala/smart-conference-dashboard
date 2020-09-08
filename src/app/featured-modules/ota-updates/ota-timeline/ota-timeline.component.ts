import {Component, OnInit} from '@angular/core';
import {DataViewConfig} from "../../../common/data-view/models/timeline.model";
import {OtaServiceService} from "../ota-service.service";

@Component({
  selector: 'app-ota-timeline',
  templateUrl: './ota-timeline.component.html',
  styleUrls: ['./ota-timeline.component.css']
})
export class OtaTimelineComponent implements OnInit {
  dataViewConfig: DataViewConfig;

  constructor(
    private otaService: OtaServiceService
  ) {
  }

  add($event: string): void {
    console.log($event);
  }

  async ngOnInit() {
    const res = await this.otaService.getOtaResponse().toPromise()
    const types: DataViewConfig = {}
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
    this.dataViewConfig = types;
  }
}
