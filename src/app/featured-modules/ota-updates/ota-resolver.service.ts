import { OtaServiceService } from './ota-service.service';
import { Observable } from 'rxjs';
import { Card } from './../../common/card-module/models/card.model';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OtaResolverService implements Resolve<Card[]>{

  constructor(private otaService: OtaServiceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Card[]> {
    return this.otaService.getCards();
  }
}
