export interface Device {
  id: string;
  type: string;
  name: string;
  createdDate: Date | string | number;
  deviceData: any;
  disable: boolean;
}


export interface Res {
  '_id': string;
  'type': string;
  'name': string;
  'createdAt': string;
  'updatedAt': string;
  '__v': number;
  disable: boolean;
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

