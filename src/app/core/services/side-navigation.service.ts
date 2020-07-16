import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


interface NavItem {
	icon:string;
	name:string;
  routerLink:string;
  isDisabled:boolean;
  isVisible:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  private __url:string = 'http://localhost:4201';


  constructor(private http: HttpClient) { }

  getNavItems():Observable<NavItem[]>{
    return this.http.get<NavItem[]>(this.__url);
  }

}
