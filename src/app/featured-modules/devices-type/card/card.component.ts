import { Component, OnInit, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'device-type-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('cardData') public cardData:any;
  
  public chart;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.chart = {
      data: [this.cardData.status.active, this.cardData.status.inactive, this.cardData.status.faulty],
      labels: [`${this.cardData.status.active} Active`,`${this.cardData.status.inactive} Inactive`,`${this.cardData.status.faulty} faulty`],
      colors: [
        {backgroundColor:this.generateRandomRGBcolors(3)}
      ],
      type: 'doughnut',
      options: {
        responsive: true,
        cutoutPercentage: 80,
        legend:{
          display: true,
          position: 'right',
          align: 'start',
          labels: {
            usePointStyle: true,
            fontSize: 10
          }
        }
      }
    }

    this.cardData.chart = this.chart;
  }

  openDialog(){
    this.dialog.open(PopupComponent,{
      data: this.cardData,
      height: '400x',
      width: '600px'
  });
  }

  generateRandomRGBcolors(count){
    let colors = [];
    for(let i=0; i<count; i++){
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);
      colors.push(`rgb(${r},${g},${b})`);
    }
    return colors;
  }
}
