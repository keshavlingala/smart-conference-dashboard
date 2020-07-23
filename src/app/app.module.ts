//Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


//featured modules
import {SideNavigationModule} from './common/side-navigation/side-navigation.module';
import {DatatableModule} from './common/datatable/datatable.module';
import { AppRoutingModule} from './app-routing.module';


//Services
import {SideNavigationService} from './core/services/side-navigation.service';

//Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DevicesTypeComponent } from './components/devices-type/devices-type.component';
import { DevicesGroupComponent } from './components/devices-group/devices-group.component';
import { RulesComponent } from './components/rules/rules.component';
import { OtaUpdatesComponent } from './components/ota-updates/ota-updates.component';
import { GenerateKeysComponent } from './components/generate-keys/generate-keys.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MembersComponent } from './components/members/members.component';

//Guards
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DevicesTypeComponent,
    DevicesGroupComponent,
    RulesComponent,
    OtaUpdatesComponent,
    GenerateKeysComponent,
    DashboardComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SideNavigationModule,
    DatatableModule
  ],
  providers: [SideNavigationService,SideNavigationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }