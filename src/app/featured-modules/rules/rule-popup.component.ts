import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {RuleDevice} from "./rules.models";

@Component({
  template: `
    <div class="d-flex align-items-center">
      <h2 class="m-0">Factory Default</h2><span> ( {{device.rules.length}}
      Rules associated with the device type )</span>
    </div>
    <app-timeline>
      <app-timeline-item *ngFor="let rule of device.rules">
        <mat-card style="min-height: 110px;margin-top: 19px;">
          <div class="d-flex justify-content-between">
            <h4 style="margin: 0;color: #fb7e6e">{{device.name}}</h4>
            <span>{{rule.createdDate}}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>{{rule.condition}}</span>
            <div class="d-flex align-items-center">
              <mat-icon>{{rule.action.icon}}</mat-icon>
              <span>{{rule.action.name}}</span>
            </div>
          </div>

        </mat-card>
      </app-timeline-item>
    </app-timeline>
  `,
})
export class RulePopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public device: RuleDevice) {
  }

  ngOnInit(): void {
  }
}
