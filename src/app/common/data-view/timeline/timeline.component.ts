import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-timeline',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent {
}
