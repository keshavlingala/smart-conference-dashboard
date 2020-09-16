import { Component, OnInit } from '@angular/core';
import {SideNavigationService} from '../../../core/services/side-navigation.service';
import {GroupedNavItem, NavItem} from '../models/side-nav-models';

@Component({
  selector: 'app-side-nav-parent',
  templateUrl: './side-nav-parent.component.html',
  styleUrls: ['./side-nav-parent.component.css']
})
export class SideNavParentComponent implements OnInit {

  public heading: string = "Cognisense";
  public showLogoutBtn: boolean = true;
  public navItems: (NavItem | GroupedNavItem)[] = [];


  constructor(private __sideNavService: SideNavigationService) {

  }

  ngOnInit() {
    this.__sideNavService.getNavItems().subscribe(data => this.navItems = data);
  }

  

}
