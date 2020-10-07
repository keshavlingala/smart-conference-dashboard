import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardAddWidgetComponent } from './dashboard-add-widget/dashboard-add-widget.component';
import {AngularMaterialModule} from '../../shared/angular-material/angular-material.module';
import { PopUpAddDashboardComponent } from './pop-up-add-dashboard/pop-up-add-dashboard.component';



@NgModule({
  declarations: [DashboardHomeComponent, DashboardAddWidgetComponent, PopUpAddDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
