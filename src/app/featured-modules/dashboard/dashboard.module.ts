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
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartjsComponent} from './libs/chartjs/chartjs.component';
import {ChartistComponent} from './libs/chartist/chartist.component';
import {GoogleChartsComponent} from './libs/google-charts/google-charts.component';
import {LibHostDirective} from './dashboard/libhost.directive';
import {D3ChartsComponent} from './libs/d3-charts/d3-charts.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardAddWidgetComponent,
    PopUpAddDashboardComponent,
    CustomFormHostDirective,
    GuageFormComponent,
    LineFormComponent,
    DashboardComponent,
    ChartjsComponent,
    ChartistComponent,
    GoogleChartsComponent,
    LibHostDirective,
    D3ChartsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
  ]
})
export class DashboardModule {
}
