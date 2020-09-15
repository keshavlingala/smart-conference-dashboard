import {DevicesModule} from './components/devices/devices.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
//Modules
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

//featured modules
import {SideNavigationModule} from './common/side-navigation/side-navigation.module';
import {DatatableModule} from './common/datatable/datatable.module';
import {AppRoutingModule} from './app-routing.module';

import {LoginModuleModule} from './login-module/login-module.module';


//Services
import {SideNavigationService} from './core/services/side-navigation.service';

// Components
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {DevicesTypeComponent} from './components/devices-type/devices-type.component';
import {DevicesGroupComponent} from './components/devices-group/devices-group.component';
import {RulesComponent} from './components/rules/rules.component';
import {OtaUpdatesComponent} from './components/ota-updates/ota-updates.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {Dummy1Component} from './components/dummy1/dummy1.component';
//Guards
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';

import {DataViewModule} from './common/data-view/data-view.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DevicesTypeComponent,
    DevicesGroupComponent,
    RulesComponent,
    OtaUpdatesComponent,
    DashboardComponent,
    Dummy1Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SideNavigationModule,
    DatatableModule,
    DataViewModule,
    DevicesModule,
    LoginModuleModule
  ],
  providers: [SideNavigationService, SideNavigationGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
