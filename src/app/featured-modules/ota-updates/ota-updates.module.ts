import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUpdateFormComponent } from './new-update-form/new-update-form.component';
import { OtaBasePageComponent } from './ota-base-page/ota-base-page.component';
import { Routes, RouterModule } from '@angular/router';
import { DragDirective } from './new-update-form/dragDrop.directive';
import { CardModule } from 'src/app/common/card-module/card.module';
import { ProgressComponent } from './progress/progress.component';
const routes: Routes = [
  {path: "", redirectTo: "ota-base-page", pathMatch: "full"},
  {path: "ota-base-page", component: OtaBasePageComponent},
  {path: "ota-new-update-form", component: NewUpdateFormComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CardModule,
  ],
  declarations: [
    NewUpdateFormComponent,
    OtaBasePageComponent,
    DragDirective,
    ProgressComponent,
  ],
  exports:[
    NewUpdateFormComponent,
    OtaBasePageComponent,
  ],
})
export class OtaUpdatesModule { }
