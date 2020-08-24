import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddDeviceGroupComponent } from './add-device-group/add-device-group.component';

const routes: Routes = [{path:'',component: HomeComponent},
{path:'add-device-group' ,component:AddDeviceGroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class DevicesGroupRoutingModule { }
