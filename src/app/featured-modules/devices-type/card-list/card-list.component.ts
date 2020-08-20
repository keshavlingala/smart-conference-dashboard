import { Component, OnInit ,ViewChildren, QueryList,AfterViewInit,Renderer2,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'device-type-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, AfterViewInit {

  @ViewChildren('paginationlink') paginationLinks: QueryList<any>;
  @Input('devicesTypeData') public cards = [];
  @Input('devicesTypeCount') public cardsCount:number;
  @Input('perPageData') public perPageCards;
  @Output() paginationEvent = new EventEmitter();

  public paginationArray = [];

  constructor(private renderer: Renderer2) { 

  }

  getCardsOfPageNumber(pageNumber){
    this.paginationEvent.emit(pageNumber);
    this.addActiveClassToPaginationLink(pageNumber);
  }

  ngOnInit(): void {
    this.paginationArray = new Array(Math.ceil(this.cardsCount/this.perPageCards)).fill(0);
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.paginationLinks.toArray()[0].nativeElement, 'page-active')
  }

  
  addActiveClassToPaginationLink(index){
    this.paginationLinks.forEach((link,i)=>{
      if(i!=index){
        this.renderer.removeClass(link.nativeElement, 'page-active');
      }
      else {
        this.renderer.addClass(link.nativeElement, 'page-active');
      }
    });
  }
}
