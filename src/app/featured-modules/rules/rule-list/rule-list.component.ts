import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.scss']
})
export class RuleListComponent implements OnInit {
  date = new Date();
  rule_lists = Array.from({length: 20,}, () => 0);
  shownData = new BehaviorSubject<any>([]);
  @ViewChild(MatPaginator, {static: true}) paginator
  currPage = []
  pages = []
  pageSize = 6;
  selectedIndex = 0;

  constructor(private changeDetector: ChangeDetectorRef) {

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
}
