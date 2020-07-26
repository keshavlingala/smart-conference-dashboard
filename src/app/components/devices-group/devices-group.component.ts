import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-group',
  templateUrl: './devices-group.component.html',
  styleUrls: ['./devices-group.component.css']
})
export class DevicesGroupComponent implements OnInit {
  title  =  "Devices Group"
  constructor() { }

  ngOnInit(): void {
  }

}
