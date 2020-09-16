import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {SideNavigationService} from '../services/side-navigation.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationGuard implements CanLoad {
constructor(private __sideNavService: SideNavigationService, private __router: Router){

}

canLoad(route: Route): Observable<boolean> | boolean{
  var url = route['path']
  return this.__sideNavService.getNavItems().pipe(map(data=>{
      var isDisabled = data.filter(ele => {
        if(ele['isGrouped']){
          var isAnyChildDisabled = 0;
          ele['children'].forEach(item=>{
            if(item['routerLink'] === url && item['isDisabled']){
              isAnyChildDisabled++;
            }
          });
          if(isAnyChildDisabled>0){
            return true;
          }
        }
        else {
          return ele['routerLink'] === url && ele['isDisabled']
        }
      });

      if(isDisabled.length!=0){
        alert("You can't access this url");
        this.__router.navigateByUrl("/");
        return false;
      }
      return true;
    }));

  }


}
