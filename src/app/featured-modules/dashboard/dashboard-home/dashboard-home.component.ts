import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PopUpAddDashboardComponent} from '../pop-up-add-dashboard/pop-up-add-dashboard.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Dashboard, DashboardResponse} from '../dashboard-types.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  dashboardForm: FormGroup;
  subs: Subscription[] = [];
  dashboards: Dashboard[] =
    ({
      status: 'success',
      message: 'Dashboard details fetched successfully',
      data: [
        {
          read: [],
          _id: '5f743092f569880029b488c5',
          dashboardName: 'TiSensorTag',
          widgets: [
            {
              data: {
                deviceId: '5f742b0326b9e90027a555c9',
                deviceName: 'SmartSensor',
                deviceType: 'TiSensorTag',
                attributes: 'AmbientTemperature',
                dataUnit: '°C',
                min: null,
                max: null
              },
              settings: {
                color: '#2ecc71'
              },
              _id: '5f7433acf569880029b488d3',
              label: 'Temperature',
              component: 'gauge',
              id: '100',
              rows: 1,
              cols: 1
            },
            {
              data: {
                deviceId: '5f742b0326b9e90027a555c9',
                deviceName: 'SmartSensor',
                deviceType: 'TiSensorTag',
                attributes: 'RelativeHumidity',
                dataUnit: '%',
                min: null,
                max: null
              },
              settings: {
                color: '#2ecc71'
              },
              _id: '5f743092f569880029b488c7',
              label: 'Humidity',
              component: 'gauge',
              id: '101',
              rows: 1,
              cols: 1
            },
            {
              data: {
                deviceId: '5f742b0326b9e90027a555c9',
                deviceName: 'SmartSensor',
                deviceType: 'TiSensorTag',
                attributes: 'Luminosity',
                dataUnit: 'cdl',
                min: null,
                max: null
              },
              settings: {
                color: '#2ecc71'
              },
              _id: '5f743092f569880029b488c8',
              label: 'Luminosity',
              component: 'gauge',
              id: '102',
              rows: 1,
              cols: 1
            },
            {
              data: {
                deviceId: '5f742b0326b9e90027a555c9',
                deviceName: 'SmartSensor',
                deviceType: 'TiSensorTag',
                attributes: [
                  'GyroscopeX',
                  'GyroscopeY',
                  'GyroscopeZ'
                ],
                dataUnit: 'angle',
                lastDataTime: '50'
              },
              settings: {
                color: '#2ecc71'
              },
              _id: '5f743c9cf569880029b488db',
              label: 'Gyroscope',
              component: 'line',
              id: '103',
              rows: 2,
              cols: 2
            },
            {
              data: {
                deviceId: '5f742b0326b9e90027a555c9',
                deviceName: 'SmartSensor',
                deviceType: 'TiSensorTag',
                attributes: 'BarometricPressure',
                dataUnit: '%',
                min: null,
                max: null
              },
              settings: {
                color: '#2ecc71'
              },
              _id: '5f7430dbf569880029b488cd',
              label: 'Barometric Pressure',
              component: 'gauge',
              id: '104',
              rows: 1,
              cols: 1
            }
          ],
          createdBy: '5f4a65ea01581b00184c4b4a',
          createdAt: '2020-09-30T07:15:30.336Z',
          updatedAt: '2020-09-30T08:06:52.454Z'
        }
      ]
    } as DashboardResponse).data;
  selectedDashboard = this.dashboards[0];

  constructor(
    private dialog: MatDialog,
    private  router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      dashboardName: ['', Validators.required]
    });
    this.subs.push(this.dashboardForm.valueChanges.subscribe(change => {
      console.log(change);
    }));
  }

  addDashboard() {
    this.dialog.open(PopUpAddDashboardComponent).afterClosed().subscribe(val => {
      // Dashboard name logged
      console.log(val);
      if (val) {
        this.router.navigate(['add-widget'], {
          relativeTo: this.activateRoute,
          queryParams: {
            name: val
          }
        });
      }
    });
  }

  addWidget() {
    this.router.navigate(['add-widget'], {
      relativeTo: this.activateRoute,
      queryParams: {
        name: this.selectedDashboard.dashboardName
      }
    });
  }
}
