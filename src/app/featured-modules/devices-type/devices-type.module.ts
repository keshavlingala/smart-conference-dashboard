import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ChartsModule} from 'ng2-charts';

import { DevicesTypeRoutingModule } from './devices-type-routing.module';


import {DevicesTypeListingComponent} from './devices-type-listing/devices-type-listing.component';
import { AddDeviceTypeFormComponent } from './add-device-type-form/add-device-type-form.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { PopupComponent } from './popup/popup.component';

import {DevicesTypeService} from '../../core/services/devices-type.service';

@NgModule({
  declarations: [DevicesTypeListingComponent, AddDeviceTypeFormComponent, CardComponent, CardListComponent, PopupComponent],
  entryComponents:[PopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChartsModule,
    DevicesTypeRoutingModule
  ],
  providers: [DevicesTypeService]
})
export class DevicesTypeModule { }
