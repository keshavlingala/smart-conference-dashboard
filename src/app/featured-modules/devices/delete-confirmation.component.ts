import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  template: `
    <div>
      <h2 class="text-danger">Are you sure you want to delete {{data.multiple ? 'selected devices' : 'this device'}}?</h2>
      <div mat-dialog-actions class="justify-content-end ">
        <button mat-stroked-button [mat-dialog-close]="false">Cancel</button>
        <button color="warn" mat-raised-button [mat-dialog-close]="true">Delete</button>
      </div>
    </div>
  `,
})
export class DeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config) {
  }
}

interface Config {
  single?: boolean;
  multiple?: boolean;
}
