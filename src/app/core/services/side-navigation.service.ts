import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NavItem, GroupedNavItem} from '../../common/side-navigation/models/side-nav-models';


@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  private __url:string = 'http://localhost:4200/assets/side-nav.json';
  //api url http://localhost:4201/


  constructor(private http: HttpClient) { }

  getNavItems():Observable<(NavItem|GroupedNavItem)[]>{
    return this.http.get<(NavItem|GroupedNavItem)[]>(this.__url);
  }
}
