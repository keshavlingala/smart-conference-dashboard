import {Component, Input, OnInit} from '@angular/core';
import {CustomLibrary} from '../CustomLibrary';
import {Widget} from '../../dashboard-types.model';
import {SingleSeries} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.scss']
})
export class D3ChartsComponent implements OnInit, CustomLibrary {
  @Input() widget: Widget;
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000
        },
        {
          name: '2010',
          value: 73000000
        },
        {
          name: '2011',
          value: 89400000
        }
      ]
    },
    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000
        },
        {
          name: '2010',
          value: 309000000
        },
        {
          name: '2011',
          value: 311000000
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000
        },
        {
          name: '2010',
          value: 50000020
        },
        {
          name: '2011',
          value: 58000000
        }
      ]
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000
        },
        {
          name: '2010',
          value: 62000000
        }
      ]
    }
  ];
  view: any[] = [700, 300];
  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // data
  single: SingleSeries = [
    {
      name: 'Germany',
      value: 40632,
      extra: {
        code: 'de'
      }
    },
    {
      name: 'United States',
      value: 50000,
      extra: {
        code: 'us'
      }
    },
    {
      name: 'France',
      value: 36745,
      extra: {
        code: 'fr'
      }
    },
    {
      name: 'United Kingdom',
      value: 36240,
      extra: {
        code: 'uk'
      }
    },
    {
      name: 'Spain',
      value: 33000,
      extra: {
        code: 'es'
      }
    },
    {
      name: 'Italy',
      value: 35800,
      extra: {
        code: 'it'
      }
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }
}
