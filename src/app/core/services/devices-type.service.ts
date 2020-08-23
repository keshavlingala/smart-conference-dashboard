import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevicesTypeService {

  public devicesTypeData = [
  {
    title: "Amazon Dash Buttons",
    totalDevices: 100,
    active: 50,
    inactive: 30,
    faulty: 20,
    warningState: {
      totalDevices: 26,
      devicesID: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Amazon Echo",
    totalDevices: 100,
    active: 80,
    inactive: 10,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "August Doorbell Cam",
    totalDevices: 100,
    active: 30,
    inactive: 30,
    faulty: 40,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Awair",
    totalDevices: 100,
    active: 50,
    inactive: 20,
    faulty: 30,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Belkin WeMo",
    totalDevices: 100,
    active: 60,
    inactive: 30,
    faulty: 10,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Canary",
    totalDevices: 100,
    active: 50,
    inactive: 40,
    faulty: 10,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Chamberlain MyQ",
    totalDevices: 100,
    active: 100,
    inactive: 0,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Cinder",
    totalDevices: 100,
    active: 90,
    inactive: 10,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Elgato Eve",
    totalDevices: 100,
    active: 0,
    inactive: 100,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Eversense",
    totalDevices: 100,
    active: 0,
    inactive: 0,
    faulty: 100,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Amazon Dash Buttons",
    totalDevices: 100,
    active: 50,
    inactive: 30,
    faulty: 20,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Amazon Echo",
    totalDevices: 100,
    active: 80,
    inactive: 10,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "August Doorbell Cam",
    totalDevices: 100,
    active: 30,
    inactive: 30,
    faulty: 40,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Awair",
    totalDevices: 100,
    active: 50,
    inactive: 20,
    faulty: 30,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Belkin WeMo",
    totalDevices: 100,
    active: 60,
    inactive: 30,
    faulty: 10,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Canary",
    totalDevices: 100,
    active: 50,
    inactive: 40,
    faulty: 10,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Chamberlain MyQ",
    totalDevices: 100,
    active: 100,
    inactive: 0,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Cinder",
    totalDevices: 100,
    active: 90,
    inactive: 10,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Elgato Eve",
    totalDevices: 100,
    active: 0,
    inactive: 100,
    faulty: 0,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  },
  {
    title: "Eversense",
    totalDevices: 100,
    active: 0,
    inactive: 0,
    faulty: 100,
    warningState: {
      totalDevices: 4,
      devicesID: ["5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454","5353sfg353fbbiakaf454"]
    },
    actions: [
        {icon: "face", title: "Turn on projector"},
        {icon: "favorite", title: "Turn on AC"},
        {icon: "grade", title: "Turn on Car"},
        {icon: "get_app", title: "Turn on Bike"}
      ],
    attributes: [
        {icon: "face", title: "Humidity"},
        {icon: "favorite", title: "Luminosity"},
        {icon: "grade", title: "Lights On"},
        {icon: "get_app", title: "Temperature"}
    ]
  }
];

  getDevicesTypeCount(){
    return this.devicesTypeData.length;
  }

  getDevicesTypeData(start,end){
    return this.devicesTypeData.slice(start,end);
  }
  constructor() { }
}
