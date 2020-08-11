import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DevicesComponent} from './components/devices/devices.component';
import { DevicesTypeComponent } from './components/devices-type/devices-type.component';
import { DevicesGroupComponent } from './components/devices-group/devices-group.component';
import { RulesComponent } from './components/rules/rules.component';
import { OtaUpdatesComponent } from './components/ota-updates/ota-updates.component';
import { GenerateKeysComponent } from './components/generate-keys/generate-keys.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';
import {Dummy1Component} from './components/dummy1/dummy1.component';
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';

const routes: Routes = [
  {path: "", redirectTo: "devices", pathMatch: "full"},
  {path: "devices", component: DevicesComponent, canActivate: [SideNavigationGuard] },
  {path: "devices-type", component: DevicesTypeComponent, canActivate: [SideNavigationGuard] },
  {path: "devices-group", component: DevicesGroupComponent, canActivate: [SideNavigationGuard]},
  {path: "rules", component: RulesComponent, canActivate: [SideNavigationGuard]},
  {path: "ota-updates", component: OtaUpdatesComponent, canActivate: [SideNavigationGuard]},
  {path: "generate-keys", component: GenerateKeysComponent, canActivate: [SideNavigationGuard]},
  {path: "dashboard", component: DashboardComponent, canActivate: [SideNavigationGuard]},
  {path: "members", component: MembersComponent, canActivate: [SideNavigationGuard]},
  {path: "dummy1",component: Dummy1Component, canActivate: [SideNavigationGuard]},
  {path: "dummy2", component: Dummy1Component, canActivate: [SideNavigationGuard]},
  {path: "dummy3", component: Dummy1Component, canActivate: [SideNavigationGuard]},
  {path: "dummy4", component: Dummy1Component, canActivate: [SideNavigationGuard]},
  {path: "**", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
