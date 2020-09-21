import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CommonLoaderModule { }
