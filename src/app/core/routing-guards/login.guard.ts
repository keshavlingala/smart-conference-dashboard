import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  public isLoggedIn:boolean = true;
  constructor(private router:Router){}
  canLoad(route: Route): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLoggedIn){
        return true;
      }
      if(!this.isLoggedIn){
        alert("you are not logged in");
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  
}
