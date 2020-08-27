import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ActionChange, DataTableActions, DataTableConfig, Device} from '../../../shared/models/data-table.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSnackBar} from '@angular/material/snack-bar';
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
  checkBox = ['checkbox']
  actionKey = ['options']
  @Input() actionsHeaderName = ' View Device Data'
  @Input() keys: string[] = ['id', 'type', 'name', 'createdDate',];
  @Input() columnNames = ['ID', 'Type', 'Name(User Defined)', ' Created Date',];
  dataSource: MatTableDataSource<Device>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel<Device>(true, []);
  @Input() addButtonName = 'Add Devices';

  constructor(
    private snack: MatSnackBar,
    private dialogFactoryService: DialogFactoryService
  ) {
  }

  ngOnInit(): void {
    if (!this.config.checkbox) {
      this.checkBox = [];
    }
    if (!this.actions) {
      this.actionKey = []
    }
    // console.log(this.columnNames, this.checkBox.concat(this.keys))
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('On Changes Called');
    // console.log('Data', this.data);
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
    this.actionClick.emit({
      selected: row,
      type: action,
      name
    });
  }
}
