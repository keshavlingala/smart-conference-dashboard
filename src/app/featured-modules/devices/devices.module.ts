import {AddDeviceComponent} from './add-device/add-device.component';
import {DevicesComponent} from './devices-base-page/devices.component';
import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from 'src/app/shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {DatatableModule} from 'src/app/common/datatable/datatable.module';
import {DeleteConfirmationComponent} from "./delete-confirmation.component";

const routes: Routes = [
  {path: "", component: DevicesComponent},
  {path: "add-device", component: AddDeviceComponent},
];

@NgModule({
  declarations: [
    DevicesComponent,
    AddDeviceComponent,
    DeleteConfirmationComponent
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
