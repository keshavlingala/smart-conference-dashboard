import {AddDeviceComponent} from './add-device/add-device.component';
import {DevicesComponent} from './devices-base-page/devices.component';
import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DatatableModule} from 'src/app/common/datatable/datatable.module';

const routes: Routes = [
  {path: "", redirectTo: "devices-base-page", pathMatch: "full"},
  {path: "devices-base-page", component: DevicesComponent},
  {path: "add-device", component: AddDeviceComponent},
];

@NgModule({
  declarations: [
    DevicesComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DatatableModule,
    RouterModule.forChild(routes),
  ],
  providers: [DatePipe],
  exports: [
    RouterModule
  ]
})
export class DevicesModule {
}
