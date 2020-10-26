import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Widget} from '../../dashboard-types.model';
import {ChartType} from 'chart.js';
import {BaseChartDirective, Color} from 'ng2-charts';
import {mapper} from '../charts.mapper';
import {CustomLibrary} from '../CustomLibrary';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit, OnChanges, AfterViewInit, CustomLibrary {
  @Input() widget: Widget;
  @ViewChild(BaseChartDirective) canvas: BaseChartDirective;
  datasets = [
    {
      data: [23, 45, 23, 56, 34, 65, 23, 45, 34, 23, 11, 54],
      label: 'Temperature'
    },
    {
      data: [35, 20, 10, 45, 50, 42, 34, 63, 15, 42, 25, 31, 56],
      label: 'Humidity'
    }
  ];
  chartType: ChartType = 'line';
  colors: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'rgba(98,83,233,0.3)'
  }];
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ChartJS Changes', changes);
  }

  ngOnInit(): void {
    console.log(this.widget);
    this.chartType = mapper.chartjs[this.widget.component];
  }

  ngAfterViewInit(): void {
    // this.canvas.update();
  }


}
