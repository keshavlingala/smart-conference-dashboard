import { Component, OnInit ,ViewChildren, QueryList,AfterViewInit,Renderer2,Input} from '@angular/core';

@Component({
  selector: 'device-type-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, AfterViewInit {

  @ViewChildren('paginationlink') paginationLinks: QueryList<any>;
  @Input('devicesTypeData') public allCards = [];
  @Input('config') config;
  public currentlyShowingCards = [];
  public paginatedCardsMatrix = [];
  public perPageCards:number;
  constructor(private renderer: Renderer2) { 

  }

  ngOnInit(): void {
    this.perPageCards = this.config.perPageCards;
    this.paginatedCardsMatrix = this.generatePaginationMatrixFromArray(this.allCards, this.perPageCards);
    this.currentlyShowingCards = this.paginatedCardsMatrix[0];
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.paginationLinks.toArray()[0].nativeElement, 'page-active')
  }

  showCards(index){
    this.currentlyShowingCards = this.paginatedCardsMatrix[index];
    this.addActiveClassToPaginationLink(index);
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

  generatePaginationMatrixFromArray(arr,cols){
    var matrix = [];
    var cIndex = 0;
    var nIndex = cols;
    while(cIndex<arr.length){
      matrix.push(arr.slice(cIndex,nIndex));
      cIndex = nIndex;
      nIndex = cIndex + cols;
    }
    return matrix;
  }
}
