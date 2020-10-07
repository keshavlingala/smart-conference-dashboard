import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SideNavParentComponent} from './side-nav-parent/side-nav-parent.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {SideNavigationGuard} from '../../core/routing-guards/side-navigation.guard';
import {LoginGuard} from '../../core/routing-guards/login.guard';

const routes: Routes = [
  {
    path: '', component: SideNavParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'devices'
      },

      {
        path: 'devices', canLoad: [LoginGuard, SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/devices/devices.module').then(m => m.DevicesModule),
      },
      {
        path: 'devices-type',
        canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/devices-type/devices-type.module').then(m => m.DevicesTypeModule),
      },
      {
        path: 'devices-group',
        canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/devices-group/devices-group.module').then(m => m.DevicesGroupModule),
      },
      {
        path: 'rules',
        canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/rules/rules.module').then(m => m.RulesModule),
      },
      {
        path: 'ota-updates', canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/ota-updates/ota-updates.module').then(m => m.OtaUpdatesModule),
      },
      {
        path: 'generate-keys', canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/generate-keys/generate-keys.module').then(m => m.GenerateKeysModule)
      },
      {
        path: 'dashboard', canLoad: [SideNavigationGuard],
        loadChildren: () => import('../../featured-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path: 'members', component: PageNotFoundComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavRoutingModule {
}
