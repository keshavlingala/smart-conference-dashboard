export interface Device {
  id: string;
  type: string;
  name: string;
  createdDate: Date;
  deviceData: any;
}


export interface Res {
  'id': string;
  'type': string;
  'name': string;
  'createdDate': number;
  'deviceDate': any;
  '__v': number;
}

export interface DataTableConfig {
  checkbox: boolean;
  pageSize: number;
  pageSizeOptions: number[];
  searchBox: boolean;
}

export interface DataTableActions {
  actions: Action[];
  bulkActions: BulkAction[];
}

export interface Action {
  name: string;
  icon: string;
  iconOpp?: string;
  color?: 'primary' | 'accent' | 'warn';
}

export interface BulkAction {
  name: string;
  icon: string;
  color?: 'primary' | 'accent' | 'warn';
}

export interface ActionChange {
  selected: Device[] | Device;
  type: 'action' | 'bulk-action';
  name: string;
}

