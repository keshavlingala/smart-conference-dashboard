import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActionChange, DataTableActions, DataTableConfig, Device} from '../../shared/models/data-table.model';
import {DataService} from '../../core/services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-parent',
  templateUrl: './devices.component.html',
  styleUrls : ['./devices.component.css']
}) 
export class DevicesComponent implements OnInit, OnDestroy {
  title:string = "Devices"
  subs: Subscription[] = [];
  data: Device[];
  dataTableConfig: DataTableConfig;
  dataTableActions: DataTableActions;

  constructor(
    public http: DataService,
    public snack: MatSnackBar
  ) {
  }

  ngOnDestroy(): void {
    // Unsubscribe Subscriptions
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    // Get Data from JSON
    this.subs.push(this.http.getDevices().subscribe(d => {
      console.log(this.data);
      this.data = d;
    }));
    // Data table Configuration
    this.dataTableConfig = {
      checkbox: true,
      pageSize: 5,
      pageSizeOptions: [5, 10, 15, 20, 50],
      searchBox: true
    };
    this.dataTableActions = {
      actions: [
        {name: 'analytics', icon: 'analytics', color: 'primary'},
        {name: 'disable', icon: 'visibility', iconOpp: 'visibility_off', color: 'accent'},
        {name: 'delete', icon: 'delete', color: 'warn'}
      ],
      bulkActions: [
        {icon: 'delete', name: 'Delete', color: 'warn'},
        {icon: 'visibility', name: 'Disable'}
      ],
    };
  }

  actionChange($event: ActionChange): void {
    console.log($event);
    this.snack.open('Action Type ' + $event.type, '', {
      duration: 1000
    });
  }

  filterChange($event: Device[]): void {
    console.log($event);
  }
}
