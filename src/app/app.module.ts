//Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


//featured modules
import {SideNavigationModule} from './side-navigation/side-navigation.module';
import { AppRoutingModule} from './app-routing.module';



import {SideNavigationService} from './services/side-navigation.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

import {SideNavigationGuard} from './side-navigation/side-navigation.guard';



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
    SideNavigationModule
  ],
  providers: [SideNavigationService, SideNavigationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }