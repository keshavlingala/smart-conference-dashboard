import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() tempData=[];
  @Output() sendData = new EventEmitter();
  public paginationMatrix = [];
  public currentlyShowing = [];
  public currentMatrixIndex = 0;
  public checked: boolean=false;
  public btnClick : number=0;
  public selected = [];
  public showBtn : boolean =false;
  public disableFbttn : boolean=false;
  public disableBbttn : boolean=true;
  Searchindex : number=0;
  toggle:boolean=false;
  elementPagination = 8;
  searchIndex=[]
  // public dummy=[];
  constructor() { }

  ngOnInit(): void {
    this.paginationMatrix = this.gMatrix(this.tempData, 8);
    this.currentlyShowing = this.paginationMatrix[0];
  }

  showSelected(){
    console.log(this.selected);
    this.sendData.emit(this.selected);
  }

  clearSelected(){
    this.selected = []
    console.log(this.selected);
  }

  cardCheck(item){
      if(this.selected.indexOf(item.id)===-1)
      {
       this.selected.push(item.id);
      }
      else{
        this.selected.splice(this.selected.indexOf(item.id),1);
      }
     // console.log(item);
     if(this.selected.length>0)
     {
       this.showBtn=true;
     }
      console.log("selected",this.selected);

    
  }


  search(event){
    
     this.searchIndex=[];
     this.btnClick=0;
     if(event.target.value==='')
     { 
       this.paginationMatrix = this.gMatrix(this.tempData, 8);
      this.currentlyShowing = this.paginationMatrix[0];
      this.currentMatrixIndex=0;
      this.disableFbttn= false;
      this.elementPagination=8;
     }

     else{
    let s = this.tempData.filter(card=>{
      let title = card.Title.toLowerCase();
      return title.includes(event.target.value.toLowerCase())
    });
    this.currentlyShowing = s;
    this.paginationMatrix = this.gMatrix(this.currentlyShowing, 8);
    this.elementPagination=this.paginationMatrix[0].length;
     }
    this.currentlyShowing = this.paginationMatrix[0];
    if(this.paginationMatrix.length<2)
    {
        this.disableBbttn=true;
            this.disableFbttn= true;
    }
    console.log("search array",this.searchIndex);
    
    
  }

  gMatrix(arr, cols){
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

 showNext(){
  
  if(this.currentMatrixIndex<this.paginationMatrix.length-1){
    this.btnClick=this.btnClick+1;
    this.currentlyShowing=this.paginationMatrix[this.currentMatrixIndex+1];
    this.currentMatrixIndex=this.currentMatrixIndex+1;
    this.disableBbttn=false;
    this.elementPagination=this.elementPagination+this.currentlyShowing.length;
  } 
  if(this.currentMatrixIndex===this.paginationMatrix.length-1)
  {
    this.disableFbttn=true
  }
  
}

showBack(){
if(this.currentMatrixIndex>0)
{
  this.elementPagination=this.elementPagination-this.currentlyShowing.length;
  this.disableFbttn=false;
  this.btnClick=this.btnClick-1;
  this.currentlyShowing=this.paginationMatrix[this.currentMatrixIndex-1];
    this.currentMatrixIndex=this.currentMatrixIndex-1;
    
}
if(this.currentMatrixIndex===0)
  {
    this.disableBbttn=true;
  }
}

}
