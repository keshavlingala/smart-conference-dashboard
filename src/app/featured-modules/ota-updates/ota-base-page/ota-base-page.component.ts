import { Card, Setting } from './../../../common/card-module/models/card.model';
import { Component, OnInit } from '@angular/core';
import { OtaServiceService } from '../ota-service.service';
import {deviceTypes} from '../../../shared/datagenerator/datagenerator.dev';

@Component({
  selector: 'app-ota-base-page',
  templateUrl: './ota-base-page.component.html',
  styleUrls: ['./ota-base-page.component.scss'],
})
export class OtaBasePageComponent implements OnInit {
  cardData: Card[];
  otaSetting: Setting[];
  deviceTypes = deviceTypes;
  selectedCards: Card[];
  constructor(
    private otaService: OtaServiceService
  ) {

    this.otaSetting = [
      {
        Elements_Number: 8,
        color: 'pink',
        icon: 'build',
        design: 'design2',
        apipaginator: true,
        column: 4,
      },
    ];
  }

  async ngOnInit() {
    this.cardData = (await this.otaService.getOtaResponse().toPromise()).data.ota.map((ota) => {
      return {
        Content: ota.deviceType,
        Footer: ota.ota.createdAt,
        Title: ota.ota.otaName,
      };
    });
  }

  onSelect(value: any) {
    this.selectedCards = this.cardData.filter(data => data.Content === value);
  }
}
