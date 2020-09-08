import { Card } from 'src/app/common/card-module/models/card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ota-cards',
  templateUrl: './ota-cards.component.html',
  styleUrls: ['./ota-cards.component.scss']
})
export class OtaCardsComponent implements OnInit {
  @Input() cardData: Card[];
  a =0 ;
  b : number;
 shift=8;
  constructor() { }

  ngOnInit(): void {
    this.b =this.shift;
  }

}
