import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PopUpAddDashboardComponent} from '../pop-up-add-dashboard/pop-up-add-dashboard.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Dashboard, MyItem} from '../dashboard-types.model';
import {GridsterComponent} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  dashboardForm: FormGroup;
  subs: Subscription[] = [];
  dashboards: Dashboard[] = [];
  selectedDashboard: Dashboard;

  @ViewChild(GridsterComponent) grid: GridsterComponent;
  @Input() dashboard: MyItem[] = [];


  constructor(
    private dialog: MatDialog,
    private  router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }


  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      dashboardName: ['']
    });
    this.subs.push(this.dashboardForm.valueChanges.subscribe(change => {
      // console.log(change);
    }));
    const localDash = JSON.parse(localStorage.getItem('dashboard')) as Dashboard;
    if (localDash) {
      this.selectedDashboard = localDash;
      // console.log({localDash});
    }
  }

  addDashboard() {
    this.dialog.open(PopUpAddDashboardComponent).afterClosed().subscribe(val => {
      // Dashboard name logged
      // console.log(val);
      if (val) {
        this.router.navigate(['add-widget'], {
          relativeTo: this.activateRoute,
          queryParams: {
            name: val
          }
        });
      }
    });
  }

  addWidget() {
    this.router.navigate(['add-widget'], {
      relativeTo: this.activateRoute,
      queryParams: {
        name: this.selectedDashboard.dashboardName
      }
    });
  }


  saveDashboard() {
    localStorage.setItem('dashboard', JSON.stringify(this.selectedDashboard));
  }
}
