import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table/data-table.component';
import {DataService} from '../../core/services/data.service';
import {DevicesComponent} from '../../components/devices/devices.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    DataTableComponent,
    DevicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    DataService
  ],
  exports: [
    DataTableComponent,
    DevicesComponent
  ]

})
export class DatatableModule {
}
