import { DataTableService } from './../../core/services/data-table.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table/data-table.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    DataTableComponent,
    // DevicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    DataTableService
  ],
  exports: [
    DataTableComponent,
  ]

})
export class DatatableModule {
}
