import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {BehaviorSubject} from 'rxjs';
import {RuleCard} from '../rules.models';
import {RulesService} from '../rule-service.service';
import {MatDialog} from '@angular/material/dialog';
import {RulePopupComponent} from '../rule-popup.component';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  date = new Date();
  ruleCards: RuleCard[];
  shownData = new BehaviorSubject<RuleCard[]>([]);
  @ViewChild(MatPaginator, {static: true}) paginator;
  currPage = [];
  pages = [];
  pageSize = 8;
  selectedIndex = 0;
  totalSize = 0;

  constructor(
    private rulesService: RulesService,
    private dialog: MatDialog
  ) {
  }

  onPageChange(index) {
    this.selectedIndex = index;
    this.shownData.next(this.pages[index]);
  }

  async ngOnInit() {
    await new Promise(res => setTimeout(res, 700));
    this.ruleCards = this.rulesService.getRuleDevices();
    this.totalSize = this.ruleCards.length;
    this.pages = this.reshape(this.ruleCards.slice(0), this.pageSize);
    this.shownData.next(this.pages[this.selectedIndex]);
    // this.changeDetector.detectChanges();
    // console.log(this.rule_lists)
    // this.shownData = this.rule_lists.connect()
    // this.rule_lists.paginator = this.paginator;
  }

  reshape(data, size) {
    const pages = [];
    while (data.length) { pages.push(data.splice(0, size)); }
    return pages;
  }

  max(a, b) {
    return Math.max(a, b);
  }

  min(a, b) {
    return Math.min(a, b);
  }

  filterSearch(searchInput: string) {
    console.log('Search API call with input ', searchInput);
    // console.log('search String', searchInput);
    // const key = searchInput.toLowerCase();
    // const filteredData = this.ruleCards.slice(0).filter((d) => {
    //   return d.name.toLowerCase().includes(key) ||
    //     d.id.toLowerCase().includes(key) ||
    //     d.rules.filter((r) => {
    //       return r.createdDate.toLowerCase().includes(key) ||
    //         r.action.name.toLowerCase().includes(key) ||
    //         r.name.toLowerCase().includes(key) ||
    //         r.condition.toLowerCase().includes(key);
    //     }).length
    // })
    // this.totalSize = filteredData.length
    // this.pages = this.reshape(filteredData, this.pageSize)
    // this.selectedIndex = 0;
    // this.shownData.next(this.pages[this.selectedIndex])
    // console.log(this.pages)
  }

  popRules(device: RuleCard) {
    this.dialog.open(RulePopupComponent, {
      data: device,
      width: '70vw',
      height: '70vh'
    });
  }
}
