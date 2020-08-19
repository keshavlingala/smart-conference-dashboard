import { Component, OnInit ,ViewChildren, QueryList,AfterViewInit,Renderer2} from '@angular/core';

@Component({
  selector: 'devices-type-listing',
  templateUrl: './devices-type-listing.component.html',
  styleUrls: ['./devices-type-listing.component.scss']
})
export class DevicesTypeListingComponent implements OnInit {

  public devicesTypeData = [{
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
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
    attributes: ["Humidity", "Luminosity", "Lights On", "Temperature"]
  }];

  public config  = {
    perPageCards: 3
  }
  constructor(){

  }

  ngOnInit(){
    
  }

}
