import {Component, OnInit} from '@angular/core';
import {DataViewConfig} from "../../common/data-view/models/timeline.model";

@Component({
  selector: 'app-ota-updates',
  templateUrl: './ota-updates.component.html',
  styleUrls: ['./ota-updates.component.css']
})
export class OtaUpdatesComponent implements OnInit {
  dataViewConfig: DataViewConfig;

  add($event: string): void {
    console.log($event);
  }

  ngOnInit(): void {
  }
}
