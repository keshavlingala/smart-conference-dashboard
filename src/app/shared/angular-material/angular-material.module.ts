import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';


const MaterialComponents = [MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatToolbarModule,MatTableModule, MatSortModule,MatPaginatorModule,MatCheckboxModule, MatSnackBarModule, MatInputModule];

@NgModule({
  imports: [
    CommonModule,
    MaterialComponents
  ], 
  exports: [MaterialComponents]
})
export class AngularMaterialModule { }