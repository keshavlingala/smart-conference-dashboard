import { PopupMsgComponent } from './../../common/popup-message/popup-msg/popup-msg.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PopupMsgService {

  constructor( 
    public dialog: MatDialog,
    ) { }

  openDialog(data){

    const dialog_ref= this.dialog.open(PopupMsgComponent,{
     data:data
 }
);

//  dialogRef.afterClosed().subscribe(()=>{
//    this.location.back();
//  })
  return dialog_ref;
 }
}
