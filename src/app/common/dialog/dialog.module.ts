import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './dialog-component/dialog.component';
import {AngularMaterialModule} from '../../shared/angular-material/angular-material.module';
import {DialogFactoryService} from '../../core/services/dialog-factory.service';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [
    DialogFactoryService
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule {
}
