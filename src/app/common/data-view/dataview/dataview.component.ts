import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Ota2} from "../../../featured-modules/ota-updates/ota.model";
import {DataViewConfig} from "../models/timeline.model";


@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit, OnChanges {
  @Input() dataViewConfig: DataViewConfig;
  @Output() addNew = new EventEmitter<string>();
  selectedUpdates: Ota2[];
  deviceTypes: string[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataViewConfig) {
      this.selectedUpdates = this.dataViewConfig[Object.keys(this.dataViewConfig)[0]]
      this.deviceTypes = Object.keys(this.dataViewConfig);
    }
  }

  ngOnInit() {
    if (this.dataViewConfig) {
      this.selectedUpdates = this.dataViewConfig[Object.keys(this.dataViewConfig)[0]]
      this.deviceTypes = Object.keys(this.dataViewConfig);
    }
  }

  addUpdate(): void {
    this.addNew.emit('add');
  }


}
