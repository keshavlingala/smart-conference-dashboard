import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {CardModule} from '../common/card-module/card.module';
import {DialogModule} from '../common/dialog/dialog.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DialogModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule,
    CardModule,
    HttpClientModule,
  ]
})
export class SharedModule {
}
