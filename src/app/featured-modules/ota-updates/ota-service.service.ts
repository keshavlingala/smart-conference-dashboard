import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/common/card-module/models/card.model';
import { delay } from 'rxjs/internal/operators';
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
}
