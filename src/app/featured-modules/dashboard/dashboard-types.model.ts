export interface DashboardResponse {
  status: string;
  message: string;
  data: Dashboard[];
}

export interface Dashboard {
  read: any[];
  _id: string;
  dashboardName: string;
  widgets: Widget[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Widget {
  data: Data;
  settings: Settings;
  _id: string;
  label: string;
  component: string;
  id: string;
  rows: number;
  cols: number;
}

export interface Data {
  deviceId: string;
  deviceName: string;
  deviceType: string;
  attributes: string[] | string;
  dataUnit: string;
  min?: null;
  max?: null;
  lastDataTime?: string;
}

export interface Settings {
  color: string;
}
