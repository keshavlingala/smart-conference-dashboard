import {NgModule} from '@angular/core';
import {MyCardComponent} from './my-card/my-card.component';
import {AngularMaterialModule} from '../../shared/angular-material/angular-material.module';
import {CommonModule} from '@angular/common';
// import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    MyCardComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    MyCardComponent
  ]
})
export class CardModule {
}
