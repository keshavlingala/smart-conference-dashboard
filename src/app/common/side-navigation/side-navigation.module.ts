import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
//Components
import { SideNavComponent } from './side-nav/side-nav.component';




@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [

  ],
  exports: [SideNavComponent]
})
export class SideNavigationModule { }
