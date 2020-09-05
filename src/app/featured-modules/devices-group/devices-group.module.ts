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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomeComponent, AddDeviceGroupComponent, CardComponent],
  imports: [
    CommonModule,
    DevicesGroupRoutingModule,
    SharedModule,
    DatatableModule,
    RouterModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [DevicesGroupService]
})
export class DevicesGroupModule { }
