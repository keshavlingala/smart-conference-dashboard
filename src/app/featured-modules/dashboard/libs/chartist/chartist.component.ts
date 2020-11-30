import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../dashboard-types.model';
import {IChartistBarChart, IChartistData, IChartistLineChart, IChartistPieChart} from 'chartist';
import {mapper} from '../charts.mapper';
import {CustomLibrary} from '../CustomLibrary';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.component.html',
  styleUrls: ['./chartist.component.scss']
})
export class ChartistComponent implements OnInit, CustomLibrary {
  @Input() widget: Widget;
  @ViewChild('chartist') chart;
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
  chartType: any;


  constructor() {

  }

  ngOnInit(): void {
    this.chartType = mapper.chartist[this.widget.component];
    setInterval(() => {
      this.data.series[0].push(Math.round(Math.random() * 100));
      this.data.series[1].push(Math.round(Math.random() * 100));
      this.data.series[0].shift();
      this.data.series[1].shift();
      this.data = Object.create(this.data);
    }, 2000);
  }

  func(event: IChartistPieChart | IChartistBarChart | IChartistLineChart) {
    console.log({event});
  }
}
