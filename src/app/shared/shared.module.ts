import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from './angular-material/angular-material.module';
// import {AppRoutingModule} from '../app-routing.module';
import {CardModule} from '../common/card-module/card.module';
import {DialogModule} from '../common/dialog/dialog.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DialogModule
  ],
  exports: [
    AngularMaterialModule,
    // AppRoutingModule,
    CardModule
  ]
})
export class SharedModule { }
