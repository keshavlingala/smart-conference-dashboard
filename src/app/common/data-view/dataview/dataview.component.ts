import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Ota2} from "../../../featured-modules/ota-updates/ota.model";
import {DataViewConfig} from "../models/timeline.model";
import {animate, state, style, transition, trigger} from "@angular/animations";


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
      return ota.createdAt.toLowerCase().includes(key) ||
        ota.otaDescription.toLowerCase().includes(key) ||
        ota.otaName.toLowerCase().includes(key) ||
        ota.otaVersion.toLowerCase().includes(key) ||
        ota._id.toLowerCase().includes(key)
    })
    console.log(this.selectedUpdates)
  }

  typeChanged() {
    this.selectedUpdates = this.dataViewConfig[this.selectedType]
  }
}
