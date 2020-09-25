import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() tempData = [];
  @Input() action: string;
  @Input() totalCount: number;
  @Output() sendData = new EventEmitter();
  @Output() pageData = new EventEmitter();
  startIndex: number = 0;
  endIndex: number = 0;
  public paginationMatrix = [];
  public currentlyShowing = [];
  public currentMatrixIndex = 0;
  public btnClick: number = 0;
  public selected = [];
  public showBtn: boolean = false;
  Searchindex: number = 0;
  elementPagination = 0;
  currentPage: number = 1;
  totalPages: number;
  searchIndex = [];
  tempDataClone;
  flag: boolean = false;

  constructor() { }

  ngOnChanges(SimpleChanges: SimpleChanges) {
    if (this.tempData == undefined) {
      this.tempData = [];
    }
    if (this.flag === false) {
      this.endIndex = this.tempData.length;

      this.totalPages = Math.ceil(this.totalCount / 8);
      this.flag = true;
    }

    this.elementPagination = this.tempData.length;
    this.tempDataClone = JSON.stringify(this.tempData);
    this.paginationMatrix = this.gMatrix(this.tempData, 8);
    this.currentlyShowing = this.paginationMatrix[0];

  }


  ngOnInit(): void {

  }

  showSelected() {

    this.sendData.emit({
      selected: this.selected,
      action: this.action
    });
  }



  cardCheck(item) {
    if (this.selected.indexOf(item.id) === -1) {
      this.selected.push(item.id);
    }
    else {
      this.selected.splice(this.selected.indexOf(item.id), 1);
    }
    if (this.selected.length > 0) {
      this.showBtn = true;
    }


  }


  search(event) {

    this.searchIndex = [];
    this.btnClick = 0;
    if (event.target.value === '') {
      this.paginationMatrix = this.gMatrix(this.tempData, 8);
      this.currentlyShowing = this.paginationMatrix[0];
      this.elementPagination = this.tempData.length;
    }

    else {
      let s = this.tempData.filter(card => {
        let title = card.Title.toLowerCase();
        return title.includes(event.target.value.toLowerCase())
      });
      if (s.length > 0) {
        this.currentlyShowing = s;
        this.paginationMatrix = this.gMatrix(this.currentlyShowing, 8);
        this.elementPagination = this.paginationMatrix[0].length;
      }
      else {
        this.currentlyShowing = [];
        this.paginationMatrix = this.gMatrix(this.currentlyShowing, 8);

        this.elementPagination = 0;
      }
    }
    this.currentlyShowing = this.paginationMatrix[0];



  }

  gMatrix(arr, cols) {
    var matrix = [];
    var cIndex = 0;
    var nIndex = cols;
    while (cIndex < arr.length) {
      matrix.push(arr.slice(cIndex, nIndex));
      cIndex = nIndex;
      nIndex = cIndex + cols;
    }
    return matrix;
  }

  showNext() {
    this.elementPagination = this.tempData.length;

    if (this.currentPage < this.totalPages) {
      this.startIndex = this.startIndex + 8;

      this.endIndex = this.endIndex + 8;
      this.pageData.emit({
        startIndex: this.startIndex,
        endIndex: this.endIndex
      });
      this.currentPage++;

    }

  }

  showBack() {
    this.elementPagination = this.tempData.length;

    if (this.currentPage > 1) {

      this.startIndex = this.startIndex - 8;
      this.endIndex = this.endIndex - 8;
      this.pageData.emit({
        startIndex: this.startIndex,
        endIndex: this.endIndex
      })
      this.currentPage--;

    }
  }

  sortAlpha(x) {

    if (x) {
      this.tempData.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
      this.paginationMatrix = this.gMatrix(this.tempData, 8);
      this.currentlyShowing = this.paginationMatrix[0];
    }
    else {
      this.resetAll();
    }

  }
  sortByRecentlyAdded(x) {
    if (x) {
      this.tempData.sort((a, b) => {
        var d1 = new Date(a.Date);
        var d2 = new Date(b.Date);
        return Number(d2) - Number(d1)
      });
      this.paginationMatrix = this.gMatrix(this.tempData, 8);
      this.currentlyShowing = this.paginationMatrix[0];


    }
    else {
      this.resetAll();
    }
  }

  resetAll() {
    this.tempData = JSON.parse(this.tempDataClone);
    this.paginationMatrix = this.gMatrix(this.tempData, 8);
    this.currentlyShowing = this.paginationMatrix[0];
  }

}
