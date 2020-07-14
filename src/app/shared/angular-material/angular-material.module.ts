import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
const MaterialComponents = [MatSidenavModule, MatIconModule, MatListModule];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ], 
  exports: [MaterialComponents]
})
export class AngularMaterialModule { }