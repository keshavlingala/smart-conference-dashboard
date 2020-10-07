import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './common/page-not-found/page-not-found.component';
import {LoginGuard} from './core/routing-guards/login.guard';

const routes: Routes = [
  {path: '', redirectTo: 'side-nav', pathMatch: 'full'},
  {
    path: 'side-nav', canLoad: [LoginGuard],
    loadChildren: () => import('./common/side-navigation/side-navigation.module').then(m => m.SideNavigationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
