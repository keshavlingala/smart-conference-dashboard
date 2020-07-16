import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DevicesComponent} from './components/devices/devices.component';
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';

const routes: Routes = [
  {path: "", redirectTo: "devices", pathMatch: "full"},
  {path: "devices", component: DevicesComponent, canActivate: [SideNavigationGuard] },
  {path: "devices-type", component: PageNotFoundComponent, canActivate: [SideNavigationGuard] },
  {path: "devices-group", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "rules", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "ota-updates", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "generate-keys", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "dashboard", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "members", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "**", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
