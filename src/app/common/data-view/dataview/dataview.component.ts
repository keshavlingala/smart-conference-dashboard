import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Ota2} from "../../../featured-modules/ota-updates/ota.model";
import {DataViewConfig} from "../models/timeline.model";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
})
export class DataviewComponent implements OnInit, OnChanges {
  @Input() dataViewConfig: DataViewConfig;
  @Output() addNew = new EventEmitter<string>();
  selectedUpdates: Ota2[];
  deviceTypes: string[];
  selectedType: string;
  filter: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataViewConfig) {
      this.deviceTypes = Object.keys(this.dataViewConfig);
      this.selectedType = this.deviceTypes[0];
      this.selectedUpdates = this.dataViewConfig[this.selectedType]
    }
  }

  ngOnInit() {
    if (this.dataViewConfig) {
      this.deviceTypes = Object.keys(this.dataViewConfig);
      this.selectedType = this.deviceTypes[0];
      this.selectedUpdates = this.dataViewConfig[this.selectedType]
    }
  }

  addUpdate(): void {
    this.addNew.emit('add');
  }


  filterRes(key: string) {
    key = key.toLowerCase();
    this.selectedUpdates = this.dataViewConfig[this.selectedType].filter(ota => {
      return ota.createdAt.toLowerCase().includes(key)
    })
    console.log(this.selectedUpdates)
  }

  typeChanged() {
    this.selectedUpdates = this.dataViewConfig[this.selectedType]
  }

  dateChange($event: MatDatepickerInputEvent<unknown, unknown>) {
    const pipe = new DatePipe('en-US');
    const key = pipe.transform($event.value, 'MMM')
    this.filterRes(key);
    console.log($event.value);
  }
}
