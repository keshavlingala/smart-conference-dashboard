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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

//Guards
import {SideNavigationGuard} from './core/routing-guards/side-navigation.guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
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