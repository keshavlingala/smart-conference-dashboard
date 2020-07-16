import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Action, ActionChange, DataTableActions, DataTableConfig, Device} from '../../../shared/models/data-table.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(
    private snack: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    if (!this.config.checkbox) {
      this.displayedColumns.shift();
    }
    // console.log(this.config);
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('On Changes Called');
    // console.log('Changes', changes);
    if (this.data) {
      this.dataSource = new MatTableDataSource<Device>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

  toggleEye(ele: HTMLInputElement, action: Action): void {
    if (action.iconOpp) {
      ele.value = ele.value === action.icon ? action.iconOpp : action.icon;
    }
    this.snack.open(ele.value, 'Dismiss', {
      duration: 500
    });
  }
}
