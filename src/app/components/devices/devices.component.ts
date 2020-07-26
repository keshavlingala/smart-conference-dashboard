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
export class DevicesComponent implements OnInit {
  title= "Devices";
  data: Device[];
  dataTableConfig: DataTableConfig;
  dataTableActions: DataTableActions;

  constructor(
    public deviceService: DataService,
    public snack: MatSnackBar
  ) {
  }

  async ngOnInit(): Promise<any> {
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
        {icon: 'delete', name: 'delete', color: 'warn'},
        {icon: 'visibility', name: 'disable'}
      ],
    }; 
    this.data = await this.deviceService.getJson().toPromise();
    console.log(this.data);
  }

  async actionChange($event: ActionChange): Promise<any> {
    console.log($event);
    let selected = $event.selected;
    switch ($event.type) {
      case 'action':
        selected = $event.selected as Device;
        if ($event.name === 'delete') {
          await this.deviceService.deleteDevice(selected.id).toPromise();
        } else if ($event.name === 'disable') {
          await this.deviceService.disableDevice($event.selected as Device, !selected.disable).toPromise();
        }
        break;
      case 'bulk-action':
        selected = $event.selected as Device[];
        if ($event.name === 'delete') {
          await this.deviceService.deleteDevices(($event.selected as Device[])).toPromise();
        } else if ($event.name === 'disable') {
          await this.deviceService
            .disableDevices(selected, selected.length / 2 > selected
              .filter(i => i.disable).length).toPromise();
        }
        break;
    }
    this.data = await this.deviceService.getDevices().toPromise();
  }

  filterChange($event: Device[]): void {
    console.log($event);
  }
}
