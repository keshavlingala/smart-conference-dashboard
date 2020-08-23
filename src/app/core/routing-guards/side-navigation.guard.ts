import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {SideNavigationService} from '../services/side-navigation.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationGuard implements CanActivate {
constructor(private __sideNavService: SideNavigationService, private __router: Router){

}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.__sideNavService.getNavItems().pipe(map(data=>{
      var isDisabled = data.filter(ele => {
        if(ele['isGrouped']){
          var isAnyChildDisabled = 0;
          ele['children'].forEach(item=>{
            if(item['routerLink'] === state.url && item['isDisabled']){
              isAnyChildDisabled++;
            }
          });
          if(isAnyChildDisabled>0){
            return true;
          }
        }
        else {
          return ele['routerLink'] === state.url && ele['isDisabled']
        }
      });

      if(isDisabled.length!=0){
        alert("You can't access this url");
        return false;
      }
      return true;
    }));

  }


}
