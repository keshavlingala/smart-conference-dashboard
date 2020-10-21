import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardAddWidgetComponent} from './dashboard-add-widget/dashboard-add-widget.component';
import {AngularMaterialModule} from '../../shared/angular-material/angular-material.module';
import {PopUpAddDashboardComponent} from './pop-up-add-dashboard/pop-up-add-dashboard.component';
import {CustomFormHostDirective} from './custom-form-host.directive';
import {GuageFormComponent} from './forms/guage-form/guage-form.component';
import {LineFormComponent} from './forms/line-form/line-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartjsComponent } from './widgets/chartjs/chartjs.component';
import { ChartistComponent } from './widgets/chartist/chartist.component';


@NgModule({
  declarations: [DashboardHomeComponent, DashboardAddWidgetComponent, PopUpAddDashboardComponent, CustomFormHostDirective, GuageFormComponent, LineFormComponent, DashboardComponent, ChartjsComponent, ChartistComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule {
}
