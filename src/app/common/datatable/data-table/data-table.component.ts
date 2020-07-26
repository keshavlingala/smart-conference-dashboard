import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {ActionChange, DataTableActions, DataTableConfig, Device} from '../../../shared/models/data-table.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ViewDetailsPopup} from '../../../common/dialog/models/data.model';
import {Card, Setting} from '../../../common/card-module/models/card.model';
import {DialogFactoryService} from '../../../core/services/dialog-factory.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges, OnInit {
  @Input() data: Device[];
  @Input() config: DataTableConfig;
  @Input() actions: DataTableActions;
  @Output() actionClick = new EventEmitter<ActionChange>();
  @Output() bulkActionClick = new EventEmitter<ActionChange>();
  @Output() filterChange = new EventEmitter<Device[]>();
  displayedColumns: string[] = ['checkbox', 'id', 'type', 'name', 'createdDate', 'options'];
  dataSource: MatTableDataSource<Device>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<Device>(true, []);
  @ViewChild(TemplateRef) tpl: TemplateRef<any>;
  @ViewChild('userDialogTemplate')
  userDialogTemplate: TemplateRef<any>;
  @Input() popUpData: ViewDetailsPopup = {
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
  @Input() setting: Setting[] = [
    {
      Elements_Number: 6,
      color: 'yellow',
      icon: 'build',
      design: 'design3',
      apipaginator: false,
    },
  ];
  index: number;

//  POp up Model Methods
  startIndex = 0;
  endIndex: number = this.setting[0].Elements_Number;

  constructor(
    private snack: MatSnackBar,
    private dialogFactoryService: DialogFactoryService
  ) {
  }

  ngOnInit(): void {
    if (!this.config.checkbox) {
      this.displayedColumns.shift();
    }
    this.tempData = this.popUpData.tabs.attributes;
    this.cardData = this.setting[0].apipaginator === false ? this.tempData.slice(this.startIndex, this.endIndex) : this.tempData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('On Changes Called');
    // console.log('Changes', changes);
    if (this.data) {
      this.dataSource = new MatTableDataSource<Device>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.selection.clear();
    }
  }

  bulkActionHandler(type: 'action' | 'bulk-action', name: string): void {
    this.bulkActionClick.emit({
      type,
      name,
      selected: this.selection.selected
    });
  }

  assertType(row: Device): Device {
    return row;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  filter(event: KeyboardEvent): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
    this.filterChange.emit(this.dataSource.filteredData);
  }

  rowAction(row: Device, action: 'action' | 'bulk-action', name: string): void {
    if (action === 'action' && name === 'analytics') {
      console.log(this.userDialogTemplate);
      this.dialogFactoryService.open(
        {
          template: this.userDialogTemplate,
        },
        {width: 500, height: 605, disableClose: true}
      );
    }
    this.actionClick.emit({
      selected: row,
      type: action,
      name
    });
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
