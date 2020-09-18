import { SharedModule } from '../../shared/shared.module';
// import { SharedModule } from './../../shared/shared.module'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupMessageRoutingModule } from './popup-message-routing.module';
import { PopupMsgComponent } from './popup-msg/popup-msg.component';


@NgModule({
  declarations: [PopupMsgComponent],
  imports: [
    CommonModule,
    PopupMessageRoutingModule,
    SharedModule,
    
  ]
})
export class PopupMessageModule { }
