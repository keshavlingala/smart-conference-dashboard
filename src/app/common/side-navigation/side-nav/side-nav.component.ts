import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-navigation-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input('heading') public heading:string;
  @Input('showHeading') public showHeading:boolean;
  @Input('showLogoutBtn') public showLogoutBtn:boolean;
  @Input('navItems') public navItems =  [];

  constructor() { }

  ngOnInit(): void {

  }


}
