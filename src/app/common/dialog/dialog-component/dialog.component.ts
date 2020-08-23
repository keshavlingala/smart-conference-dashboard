import {Component, Inject, TemplateRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent<T> {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent<T>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      template: TemplateRef<any>
      context: T
    }
  ) {
  }
}
