import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActionChange, DataTableActions, DataTableConfig, Device} from '../../shared/models/data-table.model';
import {DataService} from '../../core/services/data.service';
import {ViewDetailsPopup} from '../../common/dialog/models/data.model';
import {Card, Setting} from '../../common/card-module/models/card.model';
import {DialogFactoryService} from '../../core/services/dialog-factory.service';


@Component({
  selector: 'app-parent',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  title = "Devices";
  @ViewChild(TemplateRef) tpl: TemplateRef<any>;
  @ViewChild('userDialogTemplate')
  userDialogTemplate: TemplateRef<any>;
  popUpData: ViewDetailsPopup = {
    title: {
      name: '76jasdbk0920',
      icon: 'fa-id-badge',
    },
    tabs: {
      attributes: [
        {
          Title: 'Humidity',
          Content: 50.997729349,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Lights ON',
          Content: 0,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Occupancy',
          Content: 5,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Projector ON',
          Content: 36.354,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Temperature',
          Content: 5,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Luminosity',
          Content: 78.323,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'Prerna',
          Content: 50.997729349,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'patraaj ON',
          Content: 0,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'nds;oasfkd',
          Content: 5,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'mlsandvls ON',
          Content: 36.354,
          Footer: new Date().toISOString(),
        },
        {
          Title: 'asdvm s.d',
          Content: 5,
          Footer: new Date().toISOString(),
        },
      ],
      actions: [
        {
          icon: ' fa-snowflake-o',
          value: 'Turn ON AC',
          toggle: false,
        },
        {
          icon: 'fa-lightbulb-o',
          value: 'Turn ON Lights',
          toggle: false,
        },
        {
          icon: 'fa-camera',
          value: 'Projector ON',
          toggle: false,
        },
        {
          icon: 'fa-thermometer-empty',
          value: 'Temprature Check',
          toggle: false,
        },
      ],
    },
    config: {
      dismissbtn: true,
    },
  };
  show = false;
  cardData: Card[];
  tempData: Card[];
  setting: Setting[] = [
    {
      Elements_Number: 6,
      color: 'yellow',
      icon: 'build',
      design: 'design3',
      apipaginator: false,
    },
  ];
  index: number;
  startIndex = 0;
  endIndex: number = this.setting[0].Elements_Number;

  data: Device[];
  dataTableConfig: DataTableConfig;
  dataTableActions: DataTableActions;

  constructor(
    public deviceService: DataService,
    public dialogService: DialogFactoryService
  ) {
  }

  async ngOnInit(): Promise<any> {
    // Pop Up Cards
    this.tempData = this.popUpData.tabs.attributes;
    this.cardData = this.setting[0].apipaginator === false ? this.tempData.slice(this.startIndex, this.endIndex) : this.tempData;

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
    // console.log(this.data);
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
        } else if ($event.name === 'analytics') {
          this.dialogService.open(
            {
              template: this.userDialogTemplate,
            },
            {width: 500, height: 605, disableClose: true}
          );
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

  slideToggleFunction(id: number): void {
    this.popUpData.tabs.actions[id].toggle = !this.popUpData.tabs.actions[id].toggle;
  }

  accessKeyShow(): void {
    this.show = !this.show;
  }

  moveBackward(): void {
    if (this.startIndex !== 0) {
      this.startIndex = this.startIndex - this.setting[0].Elements_Number;
      this.endIndex = this.endIndex - this.setting[0].Elements_Number;
      this.cardData = this.setting[0].apipaginator === false ? this.tempData.slice(this.startIndex, this.endIndex) : this.tempData;
      this.tempData = this.popUpData.tabs.attributes;
    }
  }

  moveForward(): void {
    length = this.tempData.length;
    if (this.endIndex < length) {
      this.startIndex = this.startIndex + this.setting[0].Elements_Number;
      this.endIndex = this.endIndex + this.setting[0].Elements_Number;
      this.cardData = this.setting[0].apipaginator === false ? this.tempData.slice(this.startIndex, this.endIndex) : this.tempData;
      this.tempData = this.popUpData.tabs.attributes;
    }
  }
}
