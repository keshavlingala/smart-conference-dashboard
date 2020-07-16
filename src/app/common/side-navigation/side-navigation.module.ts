import { NgModule } from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

//Components
import { SideNavComponent } from './side-nav/side-nav.component';




@NgModule({
  declarations: [SideNavComponent],
  imports: [
    SharedModule
  ],
  providers: [

  ],
  exports: [SideNavComponent]
})
export class SideNavigationModule { }
