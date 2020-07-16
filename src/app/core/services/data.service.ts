import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device, Res} from '../../shared/models/data-table.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public http: HttpClient
  ) {
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Res[]>('http://localhost:4200/assets/data.json/').pipe(
      map(data => {
        return data.map(doc => {
          return {
            id: doc.id,
            createdDate: new Date(doc.createdDate),
            deviceData: null,
            name: doc.name,
            type: doc.type
          };
        });
      })
    );
  }
}
