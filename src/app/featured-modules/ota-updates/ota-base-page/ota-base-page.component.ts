import {Card} from './../../../common/card-module/models/card.model';
import {Component, OnInit} from '@angular/core';
import {OtaServiceService} from '../ota-service.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-ota-base-page',
  templateUrl: './ota-base-page.component.html',
  styleUrls: ['./ota-base-page.component.scss'],
})
export class OtaBasePageComponent implements OnInit {
  cardData: Card[];
  selectedCards: Card[];
  selected: string;
  deviceSearch: FormGroup;
  deviceTypes = new BehaviorSubject<string[]>([]);
  allDeviceTypes: string[];

  constructor(
    private otaService: OtaServiceService,
    private fb: FormBuilder
  ) {

  }

  async ngOnInit() {
    this.deviceSearch = this.fb.group({
      deviceType: ['']
    })
    this.allDeviceTypes = this.otaService.getDeviceTypes();
    this.cardData = (await this.otaService.getOtaResponse().toPromise()).data.ota.map((ota) => {
      return {
        Content: ota.deviceType,
        Footer: ota.ota.createdAt,
        Title: ota.ota.otaName,
      };
    });
    this.deviceTypes.next(this.allDeviceTypes);
    this.deviceSearch.valueChanges.subscribe(change => {
      console.log(change);
      let key = this.deviceSearch.value.deviceType;
      this.deviceTypes.next(this.allDeviceTypes.filter(name => {
        return name.includes(key);
      }))
    })
  }

  onSelect(value: any) {
    this.selectedCards = this.cardData.filter(data => data.Content === value);
  }
}
