import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-popup-msg',
  templateUrl: './popup-msg.component.html',
  styleUrls: ['./popup-msg.component.css']
})
export class PopupMsgComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}