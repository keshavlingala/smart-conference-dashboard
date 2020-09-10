import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GenerateKeysHomeComponent} from "./generate-keys-home/generate-keys-home.component";

const ROUTES: Routes = [
  {path: '', component: GenerateKeysHomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class GenerateKeysRoutingModule {
}
