import {Component, Input, OnInit} from '@angular/core';
import {GoogleChartInterface} from 'ng2-google-charts';
import {Widget} from '../../dashboard-types.model';
import {mapper} from '../charts.mapper';

@Component({
  selector: 'app-google-charts',
  templateUrl: './google-charts.component.html',
  styleUrls: ['./google-charts.component.scss']
})
export class GoogleChartsComponent implements OnInit {
  @Input() widget: Widget;
  pieChart: GoogleChartInterface = {
    chartType: 'BarChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {title: 'Tasks'},
  };

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.widget);
    this.pieChart.chartType = mapper.google[this.widget.component];
  }

}
