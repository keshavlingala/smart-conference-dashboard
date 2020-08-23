import { Component, OnInit, Input,ViewChildren,ViewChild,ElementRef, QueryList, AfterViewInit, OnChanges, SimpleChanges,Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import {NavItem, GroupedNavItem} from '../models/side-nav-models';
@Component({
  selector: 'side-navigation-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('heading') public heading:string = null;
  public showHeading:boolean;
  @Input('showLogoutBtn') public showLogoutBtn:boolean = true;
  @Input('navItems') public navItems:(NavItem|GroupedNavItem)[] =  [];
  public groupedNavItems:number[] = [];
  @ViewChildren('expansionPanel') expansionPanels:QueryList<any>;
  @ViewChild('side_nav') sideNav: ElementRef;
  constructor(private route: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
    if(this.heading!=null){
      this.showHeading = true;
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.navItems!=undefined){
      this.navItems.forEach((item,index)=>{
        if(item['isGrouped']){
          this.groupedNavItems.push(index);
        }
        });
    }

  }

  ngAfterViewInit(){
  }

  closeAllExpansionPanelsExcept(i){
    let matIndex = this.groupedNavItems.indexOf(i);
    this.expansionPanels.forEach((ep,index)=>{
      if(index!=matIndex){
        ep.close();
      }
    });

    //make the router link of first child which is not disabled to active
    let childrenInGroup = this.navItems[i]['children'];
    for(let j=0; j<childrenInGroup.length; j++){
      if(!childrenInGroup[j].isDisabled && childrenInGroup[j].isVisible){
        this.route.navigate([childrenInGroup[j].routerLink]);
        break;
      }
    }
  }

  closeAllExpansionPanels(){
    this.expansionPanels.forEach(ep=>ep.close());
  }

  toggleSideNav(){
    if(this.sideNav.nativeElement.classList.contains('open')){
      this.renderer.removeClass(this.sideNav.nativeElement,'open');
    }
    else {
      this.renderer.addClass(this.sideNav.nativeElement, 'open');
    }
  }

}
