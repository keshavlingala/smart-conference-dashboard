import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';

const routes: Routes = [
  {path: "", redirectTo: "devices", pathMatch: "full"},
  {
    path: "devices", canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/devices/devices.module').then(m => m.DevicesModule),
  },
  {
    path: "devices-type",
    canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/devices-type/devices-type.module').then(m => m.DevicesTypeModule),
  },
  {
    path: "devices-group",
    canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/devices-group/devices-group.module').then(m => m.DevicesGroupModule),
  },
  {
    path: "rules",
    canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/rules/rules.module').then(m => m.RulesModule),
  },
  {
    path: "ota-updates", canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/ota-updates/ota-updates.module').then(m => m.OtaUpdatesModule),
  },
  {
    path: "generate-keys", canActivate: [SideNavigationGuard],
    loadChildren: () => import('./featured-modules/generate-keys/generate-keys.module').then(m => m.GenerateKeysModule)
  },
  {path: "dashboard", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]},
  {path: "**", component: PageNotFoundComponent, canActivate: [SideNavigationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
