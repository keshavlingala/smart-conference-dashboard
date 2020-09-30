import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

import {Ota2} from "../../../featured-modules/ota-updates/ota.model";


@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
})
export class DataviewComponent implements OnInit, OnChanges {
  @Input() dataViewConfig;
  @Output() addNew = new EventEmitter<string>();
  selectedUpdates: Ota2[];
  

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataViewConfig) {
      this.selectedUpdates = this.dataViewConfig;
    }
  }

  ngOnInit() {
    if (this.dataViewConfig) {
      this.selectedUpdates = this.dataViewConfig;
    }
  }

  addUpdate(): void {
    this.addNew.emit('add');
  }
}
