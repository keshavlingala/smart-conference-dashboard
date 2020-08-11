import { Component, OnInit } from '@angular/core';
import {SideNavigationService} from './core/services/side-navigation.service';
import {NavItem, GroupedNavItem} from './common/side-navigation/models/side-nav-models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public heading:string = "Cognisense";
  public showLogoutBtn:boolean = true;
  public navItems:(NavItem|GroupedNavItem)[] = [];
  constructor(private __sideNavService: SideNavigationService){

  }

  ngOnInit(){
    this.__sideNavService.getNavItems().subscribe(data=>this.navItems = data);
  }
 
}
