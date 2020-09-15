import {Component, OnInit} from '@angular/core';
import {SideNavigationService} from './core/services/side-navigation.service';
import {GroupedNavItem, NavItem} from './common/side-navigation/models/side-nav-models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public heading: string = "Cognisense";
  public showLogoutBtn: boolean = true;
  public navItems: (NavItem | GroupedNavItem)[] = [];

  public isLoggedIn: boolean = true;

  constructor(private __sideNavService: SideNavigationService) {

  }

  ngOnInit() {
    this.__sideNavService.getNavItems().subscribe(data => this.navItems = data);
  }

  onLogin(){
    this.isLoggedIn = true;
  }
}
