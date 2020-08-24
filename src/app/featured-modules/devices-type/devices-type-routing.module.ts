import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DevicesTypeListingComponent} from './devices-type-listing/devices-type-listing.component';
import {AddDeviceTypeFormComponent} from './add-device-type-form/add-device-type-form.component';

const routes: Routes = [
  {path: '', component: DevicesTypeListingComponent },
  {path: 'add', component: AddDeviceTypeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesTypeRoutingModule { }
