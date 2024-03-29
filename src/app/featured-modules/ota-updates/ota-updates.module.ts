import { OtaServiceService } from './ota-service.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUpdateFormComponent } from './new-update-form/new-update-form.component';
import { OtaBasePageComponent } from './ota-base-page/ota-base-page.component';
import { Routes, RouterModule } from '@angular/router';
import { DragDirective } from './new-update-form/dragDrop.directive';
import { CardModule } from 'src/app/common/card-module/card.module';
import { ProgressComponent } from './progress/progress.component';
import { OtaTimelineComponent } from './ota-timeline/ota-timeline.component';
import { DataViewModule } from 'src/app/common/data-view/data-view.module';
import {FormsModule} from '@angular/forms';
import { OtaCardsComponent } from './ota-cards/ota-cards.component';
const routes: Routes = [
  {path: "", component:OtaTimelineComponent},
  {path: "ota-new-update-form", component: NewUpdateFormComponent}
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        CardModule,
        DataViewModule,
        FormsModule
    ],
  declarations: [
    NewUpdateFormComponent,
    OtaBasePageComponent,
    DragDirective,
    ProgressComponent,
    OtaTimelineComponent,
    OtaCardsComponent,
  ],
  exports:[
    NewUpdateFormComponent,
    OtaBasePageComponent,
  ],
  providers:[OtaServiceService]
})
export class OtaUpdatesModule { }
