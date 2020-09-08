import {NgModule} from '@angular/core';

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
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from '@angular/material/radio';
const MaterialComponents = [MatDialogModule,
  MatRadioModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCardModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class AngularMaterialModule {
}
