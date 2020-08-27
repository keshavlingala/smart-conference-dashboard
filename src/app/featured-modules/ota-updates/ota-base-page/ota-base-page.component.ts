import { Card, Setting } from './../../../common/card-module/models/card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ota-base-page',
  templateUrl: './ota-base-page.component.html',
  styleUrls: ['./ota-base-page.component.scss']
})
export class OtaBasePageComponent implements OnInit {
  cardData : Card[];
  otaSetting : Setting[];
  constructor() {
    this.cardData = [
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
      {
        'Title': 'Factory Default',
        'Content':'Ambient Sensing',
        'Footer': 'May 6th,2020'
      },
    ]
    this.otaSetting=[{
      Elements_Number: 8,
      color: 'pink',
      icon: 'build',
      design: 'design2',
      apipaginator: true,
      column: 4,
    }]
  }

  ngOnInit() {
  }

}
