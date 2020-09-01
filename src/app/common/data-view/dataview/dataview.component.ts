import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataViewConfig, Update} from "../models/timeline.model";


@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
  @Input() dataViewConfig: DataViewConfig;
  @Output() addNew = new EventEmitter<string>();
  selectedUpdate: Update;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.dataViewConfig);
    this.selectedUpdate = this.dataViewConfig?.all_updates[0];
  }

  addUpdate(): void {
    this.addNew.emit('add');
    this.selectedUpdate.items.push(this.selectedUpdate.items[0]);
  }
}
