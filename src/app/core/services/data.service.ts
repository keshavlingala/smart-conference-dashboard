import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Device, DeviceResponse} from '../../shared/models/data-table.model';
import {delay} from 'rxjs/operators';
import {devicesGenerator} from "../../shared/datagenerator/datagenerator.dev";
import {DatePipe} from "@angular/common";

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public http: HttpClient,
    private datePipe:DatePipe
  ) {
  }


  getDeviceResponse(): Observable<DeviceResponse> {
    return of(devicesGenerator(20)).pipe(delay(700));
    // return this.http.get<Device[]>(`http://localhost:4200/assets/data.json`).pipe(
    //   map(arr => {
    //     return arr.map(d => {
    //       return {...d, createdDate: new Date(d.createdDate).toString().split("GMT")[0]}
    //     })
    //   })
    // )
  }

  // getDevices(): Observable<Device[]> {
  //   return this.http.get<Device[]>(`http://localhost:4200/assets/data.json`).pipe(
  //     map(arr => {
  //       return arr.map(d => {
  //         return {...d, createdDate: new Date(d.createdDate).toString().split("GMT")[0]}
  //       })
  //     })
  //   )
  //   return this.http.get<Res[]>(`${BASE_URL}/devices/`).pipe(
  //     map(data => {
  //       return data.map(doc => {
  //         return {
  //           id: doc._id,
  //           createdDate: doc.createdAt,
  //           deviceData: null,
  //           name: doc.name,
  //           type: doc.type,
  //           disable: doc.disable
  //         };
  //       });
  //     })
  //   );
  // }

  // getDevice(id: string): Observable<Device> {
  //   return this.http.get<Res>(`${BASE_URL}/devices/${id}`).pipe(
  //     map(doc => {
  //       return {
  //         id: doc._id,
  //         createdDate: doc.createdAt,
  //         deviceData: null,
  //         name: doc.name,
  //         type: doc.type,
  //         disable: doc.disable
  //       };
  //     })
  //   );
  // }

  deleteDevice(id: string): Observable<Device> {
    return this.http.delete<Device>(`${BASE_URL}/devices/${id}`);
  }

  updateDevice(id: string, data: Device | any): Observable<Device> {
    return this.http.put<Device>(`${BASE_URL}/devices/${id}`, data);
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(`${BASE_URL}/devices/`, {
      name: device.name,
      type: device.type
    });
  }

  deleteDevices(selected: Device[]) {
    console.log('Delete Devices')
    // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   body: selected.map(i => i.id),
    // };
    // console.log(selected.map(i => i.id));
    // return this.http.delete<Device[]>(`${BASE_URL}/devices`, options);
  }

  disableDevice(selected: Device, status: boolean) {
    console.log('Disable Device ', selected)
    // return this.http.patch<Device>(`${BASE_URL}/api/iotone/devices/operations/${selected._id}`, {});

  }

  disableDevices(selected: Device[], status: boolean) {
    console.log('Diable Multiple Devices');
    // return this.http.patch<Device[]>(`${BASE_URL}devices/`, {
    //   selected: selected.map(i => i.id),
    //   patch: {disable: status}
    // });
  }
}
