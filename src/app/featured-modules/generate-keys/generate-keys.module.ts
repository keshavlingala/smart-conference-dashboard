import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenerateKeysHomeComponent} from "./generate-keys-home/generate-keys-home.component";
import {GenerateKeysRoutingModule} from "./generate-keys-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {GenerateKeysService} from "./generate-keys.service";
import {GenerateKeysCardComponent} from "./generate-keys-card/generate-keys-card.component";


@NgModule({
  declarations: [GenerateKeysHomeComponent, GenerateKeysCardComponent],
  imports: [
    CommonModule,
    GenerateKeysRoutingModule,
    SharedModule,
  ],
  providers: [GenerateKeysService]
})
export class GenerateKeysModule {
}
