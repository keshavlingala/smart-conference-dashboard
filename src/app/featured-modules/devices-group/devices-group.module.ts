import { PopupMsgService } from './../../core/services/popup-msg.service';
import { DevicesGroupService } from './../../core/services/devices-group.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatatableModule } from './../../common/datatable/datatable.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesGroupRoutingModule } from './devices-group-routing.module';
import { HomeComponent } from './home/home.component';
import { AddDeviceGroupComponent } from './add-device-group/add-device-group.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import {MatMenuModule} from '@angular/material/menu';

import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [HomeComponent, AddDeviceGroupComponent, CardComponent],
  imports: [
    CommonModule,
    DevicesGroupRoutingModule,
    SharedModule,
    DatatableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
    
  ],
  providers: [DevicesGroupService,DatePipe , PopupMsgService]
})
export class DevicesGroupModule { }
