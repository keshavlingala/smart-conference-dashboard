import { deviceTypes } from './../../../shared/datagenerator/datagenerator.dev';
import { Card } from './../../../common/card-module/models/card.model';
import { Component, OnInit } from '@angular/core';
import { OtaServiceService } from '../ota-service.service';

@Component({
  selector: 'app-ota-base-page',
  templateUrl: './ota-base-page.component.html',
  styleUrls: ['./ota-base-page.component.scss'],
})
export class OtaBasePageComponent implements OnInit {
  cardData: Card[];
  deviceTypes= deviceTypes;
  selectedCards: Card[];
  selected: string;
  constructor(
    private otaService: OtaServiceService
  ) {

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
