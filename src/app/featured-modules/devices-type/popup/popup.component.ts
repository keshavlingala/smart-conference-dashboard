import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public allWarningDevices = this.data.status.warning.devicesID;
  public currentlyShowingWarningDevices = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit(): void {
    this.currentlyShowingWarningDevices = this.allWarningDevices.slice(0,6);
  }

  paginationEvent(e:PageEvent){
    let startIndex = e.pageIndex*e.pageSize;
    let endIndex = startIndex + e.pageSize;
    this.currentlyShowingWarningDevices = this.allWarningDevices.slice(startIndex,endIndex);
  }
}
