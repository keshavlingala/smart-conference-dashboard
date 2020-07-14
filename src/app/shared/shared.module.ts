import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {AppRoutingModule} from '../app-routing.module';




@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
