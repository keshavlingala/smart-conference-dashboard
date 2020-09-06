import { Ota } from './../ota.model';
import { async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Card, Setting } from './../../../common/card-module/models/card.model';
import { Component, OnInit } from '@angular/core';
import { OtaServiceService } from '../ota-service.service';

@Component({
  selector: 'app-ota-base-page',
  templateUrl: './ota-base-page.component.html',
  styleUrls: ['./ota-base-page.component.scss']
})
export class OtaBasePageComponent implements OnInit {
  cardData : Card[]=[];
  otaSetting : Setting[];
  constructor(private _route:ActivatedRoute, private otaService : OtaServiceService,private datePipe: DatePipe) {
    // this.cardData= this._route.snapshot.data['otaData'];

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
   this.getData();
  }
   getData(){
    this.otaService.getOtaResponse().subscribe(res=>{
      const data = res.data.ota;
      // data.map(o=>{
      //   return {
      //     Title:o.ota.otaName,
      //     Content:o.deviceType,
      //     Footer:this
      //   }
      // })
      data.forEach(temp=>{
        this.cardData.push({
          'Title': temp.ota.otaName,
          'Content': temp.deviceType,
          'Footer' : this.datePipe.transform(temp.ota.createdAt, 'mediumDate')
        })
      })

    });

  }
}
