import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {DashboardAddWidgetComponent} from './dashboard-add-widget/dashboard-add-widget.component';


const routes: Routes = [
  {path: '', component: DashboardHomeComponent},
  {path: 'add-widget', component: DashboardAddWidgetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
