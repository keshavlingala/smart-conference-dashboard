import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineItemComponent} from './timeline-item/timeline-item.component';
import {TimelineComponent} from './timeline/timeline.component';
import {DataviewComponent} from './dataview/dataview.component';
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TimelineItemComponent,
    TimelineComponent,
    DataviewComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    DataviewComponent
  ]
})
export class DataViewModule {
}
