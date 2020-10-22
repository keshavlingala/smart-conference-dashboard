import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../dashboard-types.model';
import {IChartistBarChart, IChartistData, IChartistLineChart, IChartistPieChart} from 'chartist';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit {
  @Input() widget: Widget;
  data: IChartistData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };


  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.widget);
  }

  func(event: IChartistPieChart | IChartistBarChart | IChartistLineChart) {
    console.log({event});
  }
}
