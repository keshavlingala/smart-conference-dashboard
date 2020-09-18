import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../shared/models/data-table.model";

@Component({
  template: `
    <div *ngIf="data.single as data">
      <h1 mat-dialog-title>{{data.name}}</h1>
      <div mat-dialog-content>
        <ul>
          <li>
            ID: {{data._id}}
          </li>
          <li>
            Owner: {{data.owner}}
          </li>
          <li>
            Device Type: {{data.type}}
          </li>
          <li>
            Created At: {{data.createdAt}}
          </li>
        </ul>
        <p class="text-danger">Are you Sure You want to Delete This Device</p>
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">No Thanks</button>
        <button mat-button [mat-dialog-close]="true">Ok</button>
      </div>
    </div>
    <div *ngIf="data.multiple as data">
      <h1>Bulk Deletion</h1>
      <ul>
        <li *ngFor="let d of data">
          <ul>
            <li>
              ID: {{d._id}}
            </li>
            <li>
              Owner: {{d.owner}}
            </li>
            <li>
              Device Type: {{d.type}}
            </li>
            <li>
              Created At: {{d.createdAt}}
            </li>
          </ul>
        </li>
      </ul>
      <p class="text-danger">Are you Sure You want to Delete This Devices</p>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">No Thanks</button>
        <button mat-button [mat-dialog-close]="true">Ok</button>
      </div>
    </div>
  `,
  styles: [`
    li {
      padding: 10px;
      border-bottom: 1px lightblue;
      list-style: none;
    }
  `]
})
export class DeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Config) {
  }
}

interface Config {
  single?: Device,
  multiple?: Device[]
}
