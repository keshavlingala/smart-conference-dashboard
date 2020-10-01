import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  allWarningDevices = this.data.status.warning.devicesID;
  currentlyShowingWarningDevices = [];
  perPageWarningDevices:number = 6;

  allActions = this.data.actions;
  currentlyShowingActions = [];
  perPageActions:number = 2;

  allAttributes = this.data.attributes;
  currentlyShowingAttributes = [];
  perPageAttributes:number = 1;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit(): void {
    this.currentlyShowingActions = this.allActions.slice(0,this.perPageActions);
    this.currentlyShowingAttributes = this.allAttributes.slice(0,this.perPageAttributes);
    this.currentlyShowingWarningDevices = this.allWarningDevices.slice(0,this.perPageWarningDevices);
  }

  actionsPaginationEvent(e:PageEvent){
    let startIndex = e.pageIndex*e.pageSize;
    let endIndex = startIndex + e.pageSize;
    this.currentlyShowingActions = this.allActions.slice(startIndex, endIndex);
  }

  attributesPaginationEvent(e:PageEvent){
    let startIndex = e.pageIndex*e.pageSize;
    let endIndex = startIndex + e.pageSize;
    this.currentlyShowingAttributes = this.allAttributes.slice(startIndex, endIndex);
  }

  warningDevicesPaginationEvent(e:PageEvent){
    let startIndex = e.pageIndex*e.pageSize;
    let endIndex = startIndex + e.pageSize;
    this.currentlyShowingWarningDevices = this.allWarningDevices.slice(startIndex,endIndex);
  }

}
