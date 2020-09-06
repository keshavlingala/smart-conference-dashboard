import { otaUpdatesGenerator } from './../../shared/datagenerator/datagenerator.dev';
import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/common/card-module/models/card.model';
import { delay } from 'rxjs/internal/operators';
import { OtaResponse } from './ota.model';
@Injectable({
  providedIn: 'root'
})
export class OtaServiceService {
  cardData : Card[];
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
   }

   getCards() : Observable<Card[]>{
     return of(this.cardData).pipe(delay(2000));
   }
   getData(){
    return this.cardData;
   }
   getOtaResponse(): Observable<OtaResponse> {
    return of(otaUpdatesGenerator(30));
  }
}
