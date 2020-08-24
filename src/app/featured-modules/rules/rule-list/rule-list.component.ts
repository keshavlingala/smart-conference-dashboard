import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {BehaviorSubject} from "rxjs";
import {RuleDevice} from "../rules.models";
import {RulesService} from "../rule-service.service";

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  date = new Date();
  rule_lists: RuleDevice[];
  shownData = new BehaviorSubject<RuleDevice[]>([]);
  @ViewChild(MatPaginator, {static: true}) paginator
  currPage = []
  pages = []
  pageSize = 8;
  selectedIndex = 0;
  totalSize = 0;

  constructor(private rulesService: RulesService) {
    this.rule_lists = rulesService.getRuleDevices();
    this.totalSize=this.rule_lists.length;
  }

  onPageChange(index) {
    this.selectedIndex = index;
    this.shownData.next(this.pages[index]);
    console.log(this.selectedIndex)
  }

  ngOnInit(): void {
    this.pages = this.reshape(this.rule_lists.slice(0), this.pageSize)
    this.shownData.next(this.pages[this.selectedIndex])
    // this.changeDetector.detectChanges();
    // console.log(this.rule_lists)
    // this.shownData = this.rule_lists.connect()
    // this.rule_lists.paginator = this.paginator;
  }

  reshape(data, size) {
    const pages = []
    while (data.length) pages.push(data.splice(0, size));
    return pages;
  }

  max(a, b) {
    return Math.max(a, b)
  }

  min(a, b) {
    return Math.min(a, b);
  }

  filterSearch(searchInput: string) {
    const key = searchInput.toLowerCase();
    const filteredData = this.rule_lists.slice(0).filter((d) => {
      return d.name.toLowerCase().includes(key) ||
        d.id.toLowerCase().includes(key) ||
        d.rules.filter((r) => {
          return r.createdDate.toLowerCase().includes(key) ||
            r.action.name.toLowerCase().includes(key) ||
            r.name.toLowerCase().includes(key) ||
            r.condition.toLowerCase().includes(key);
        }).length
    })
    this.totalSize = filteredData.length
    this.pages = this.reshape(filteredData, this.pageSize)
    this.selectedIndex = 0;
    this.shownData.next(this.pages[this.selectedIndex])
    console.log(this.pages)
  }
}
