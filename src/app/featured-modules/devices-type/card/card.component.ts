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
  public dummyChartOptions = {
        circumference: 0,
        responsive: true,
        cutoutPercentage: 80,
        legend:{
          display: true,
          position: 'top',
          align: 'start',
          labels: {
            usePointStyle: true,
            fontSize: 10,
          }
        }
      }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.chart = {
      data: [this.cardData.active, this.cardData.inactive, this.cardData.faulty],
      labels: [`${this.cardData.active} Active`,`${this.cardData.inactive} Inactive`,`${this.cardData.faulty} faulty`],
      colors: [
        {backgroundColor:this.generateRandomRGBcolors(3)}
      ],
      type: 'doughnut',
      options: {
        responsive: true,
        cutoutPercentage: 80,
        legend:{
          display: false,
        }
      }
    }

    this.cardData.chart = this.chart;
  }

  openDialog(){
    this.dialog.open(PopupComponent,{
      data: this.cardData
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
