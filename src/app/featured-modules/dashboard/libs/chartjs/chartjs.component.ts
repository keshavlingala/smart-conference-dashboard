import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Widget} from '../../dashboard-types.model';
import {ChartType} from 'chart.js';
import {Color} from 'ng2-charts';
import {mapper} from '../charts.mapper';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit, OnChanges {
  @Input() widget: Widget;
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

}

const api = {
  status: 'success',
  message: 'Data fetched successfully!',
  data: [
    {
      data: {
        attributes: {AmbientTemperature: 16, HVACTemperature: 29},
        reservedAttributes: {transactionId: '68b2a9cb-8aad-4a2d-bbb1-d9ade1668bbd', timestamp: 1603172963482}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 27, HVACTemperature: 16},
        reservedAttributes: {transactionId: '58fbcba6-0d47-45c9-9cc3-210bba342e24', timestamp: 1603172967034}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 25, HVACTemperature: 25},
        reservedAttributes: {transactionId: '79f12915-56bc-417c-b5c1-64c63dbc0104', timestamp: 1603172970623}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 28, HVACTemperature: 27},
        reservedAttributes: {transactionId: '8af81188-17ba-438c-988e-d5993db990f8', timestamp: 1603172974130}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 27, HVACTemperature: 24},
        reservedAttributes: {transactionId: 'e550cea8-1208-43ef-9087-1f3ce24a8282', timestamp: 1603172977607}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 16, HVACTemperature: 15},
        reservedAttributes: {transactionId: '8a647210-884d-406c-9bed-aafb283c74e0', timestamp: 1603172981120}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 21, HVACTemperature: 30},
        reservedAttributes: {transactionId: 'ce10e476-1fea-47f5-9d3a-ae1f0d8bdd47', timestamp: 1603172984639}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 28, HVACTemperature: 27},
        reservedAttributes: {transactionId: 'de41705f-3616-4877-9469-bfa640d08eeb', timestamp: 1603172988178}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 15, HVACTemperature: 20},
        reservedAttributes: {transactionId: 'e0602076-51f5-474a-80ff-9d79b3e4ba25', timestamp: 1603172991662}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 27, HVACTemperature: 22},
        reservedAttributes: {transactionId: 'd0b1721b-3ef4-4e76-8322-e9ec4c26da92', timestamp: 1603172995190}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 16, HVACTemperature: 23},
        reservedAttributes: {transactionId: '76949671-7b90-4792-819e-f4df0cf8d0cf', timestamp: 1603172998763}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 19, HVACTemperature: 26},
        reservedAttributes: {transactionId: 'a6d97274-2362-45bd-953f-8438b991b974', timestamp: 1603173002301}
      }
    }, {
      data: {
        attributes: {AmbientTemperature: 15, HVACTemperature: 29},
        reservedAttributes: {transactionId: 'f3edc0b3-f52d-4008-b069-9221004080ee', timestamp: 1603173005826}
      }
    }]
};


const guage = {
  status: 'success',
  message: 'Data fetched successfully!',
  data: {
    attributes: {
      humidity: 60,
      AmbientTemperature: 15,
      HVACTemperature: 29,
      pressure: 41,
      latitude: 1.5739986725238202,
      longitude: 2.079089973421219,
      lastCheckInLocation: 'New jersey',
      lastCheckInTime: 1603172498.027001
    }, reservedAttributes: {transactionId: 'f3edc0b3-f52d-4008-b069-9221004080ee', timestamp: 1603173005826}
  }
};
