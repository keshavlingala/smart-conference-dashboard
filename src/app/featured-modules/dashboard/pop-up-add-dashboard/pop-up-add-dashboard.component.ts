import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-add-dashboard',
  templateUrl: './pop-up-add-dashboard.component.html',
  styleUrls: ['./pop-up-add-dashboard.component.scss']
})
export class PopUpAddDashboardComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PopUpAddDashboardComponent>
  ) {
  }

  ngOnInit(): void {
  }


}
