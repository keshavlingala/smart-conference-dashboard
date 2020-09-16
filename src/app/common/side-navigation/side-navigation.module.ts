import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {SideNavRoutingModule} from './side-nav-routing.module';
//Components
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavParentComponent } from './side-nav-parent/side-nav-parent.component';


import {SideNavigationService} from '../../core/services/side-navigation.service';
import {SideNavigationGuard} from '../../core/routing-guards/side-navigation.guard';
import {LoginGuard} from '../../core/routing-guards/login.guard';

import {DatatableModule} from '../datatable/datatable.module';

import {DataViewModule} from '../data-view/data-view.module';

@NgModule({
  declarations: [SideNavComponent, SideNavParentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DatatableModule,
    DataViewModule,
    SideNavRoutingModule
  ],
  providers: [
    SideNavigationService,
    SideNavigationGuard,
    LoginGuard
  ]
})
export class SideNavigationModule { }
