import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device, Res} from '../../shared/models/data-table.model';
import {map} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public http: HttpClient
  ) {
  }

  getJson(): Observable<Device[]> {
    return this.http.get<Device[]>(`http://localhost:4200/assets/data.json`).pipe(
      map(arr => {
        return arr.map(d => {
          return {...d, createdDate: new Date(d.createdDate).toString().split("GMT")[0]}
        })
      })
    )
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`http://localhost:4200/assets/data.json`).pipe(
      map(arr => {
        return arr.map(d => {
          return {...d, createdDate: new Date(d.createdDate).toString().split("GMT")[0]}
        })
      })
    )
    return this.http.get<Res[]>(`${BASE_URL}/devices/`).pipe(
      map(data => {
        return data.map(doc => {
          return {
            id: doc._id,
            createdDate: new Date(doc.createdAt),
            deviceData: null,
            name: doc.name,
            type: doc.type,
            disable: doc.disable
          };
        });
      })
    );
  }

  getDevice(id: string): Observable<Device> {
    return this.http.get<Res>(`${BASE_URL}/devices/${id}`).pipe(
      map(doc => {
        return {
          id: doc._id,
          createdDate: new Date(doc.createdAt),
          deviceData: null,
          name: doc.name,
          type: doc.type,
          disable: doc.disable
        };
      })
    );
  }

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

  deleteDevices(selected: Device[]): Observable<Device[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: selected.map(i => i.id),
    };
    console.log(selected.map(i => i.id));
    return this.http.delete<Device[]>(`${BASE_URL}/devices`, options);
  }

  disableDevice(selected: Device, status: boolean): Observable<Device> {
    console.log('Disable Request ', selected, status);
    return this.http.patch<Device>(`${BASE_URL}/devices/${selected.id}`, {
      selected: selected.id,
      patch: {disable: status}
    });
  }

  disableDevices(selected: Device[], status: boolean): Observable<Device[]> {
    return this.http.patch<Device[]>(`${BASE_URL}devices/`, {
      selected: selected.map(i => i.id),
      patch: {disable: status}
    });
  }
}
