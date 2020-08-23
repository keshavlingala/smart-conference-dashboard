import { Component, OnInit,Renderer2,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'device-type-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input('devicesTypeData') public cards = [];
  @Input('devicesTypeCount') public cardsCount:number;
  @Input('perPageData') public perPageCards;
  @Output() paginationEvent = new EventEmitter();
  public currentPage = 0; //0 based indexing
  public math = Math;
  public paginationArray = [];

  constructor(private renderer: Renderer2) { 

  }

  getCardsOfPageNumber(pageNumber){ //0 based indexing, for 1st page pageNumber will be 0.
    this.paginationEvent.emit(pageNumber);
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    this.paginationArray = new Array(Math.ceil(this.cardsCount/this.perPageCards)).fill(0);
  }
}
