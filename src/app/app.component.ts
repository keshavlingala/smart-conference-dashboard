import { Component, OnInit } from '@angular/core';
import {SideNavigationService} from './services/side-navigation.service';

interface NavItem {
  icon:string;
  name:string;
  routerLink:string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public showHeading:boolean = true;
  public showLogoutBtn:boolean = true;
  public navItems:NavItem[] = [];
  constructor(private __sideNavService: SideNavigationService){

  }

  ngOnInit(){
    this.__sideNavService.getNavItems().subscribe(data=>this.navItems = data);
  }
 
}
