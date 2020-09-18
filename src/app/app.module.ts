import { PopupMessageModule } from './common/popup-message/popup-message.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
//Modules
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {LoginGuard} from './core/routing-guards/login.guard';
//featured modules
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PopupMessageModule
  ],
  bootstrap: [AppComponent],
  providers:[LoginGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
