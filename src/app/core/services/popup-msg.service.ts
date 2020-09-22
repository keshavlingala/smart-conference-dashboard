import { PopupMsgComponent } from './../../common/popup-message/popup-msg/popup-msg.component';
import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PopupMsgService {

  constructor( 
    public dialog: MatDialog,
    ) { }

  openDialog(status , statusMsg){
   let data1 ={status , statusMsg};
   if(status==="success")
   {
     data1.status = 1;
   }
   else 
   {
     data1.status=0;
   }
   data1.statusMsg = statusMsg;

    const dialog_ref= this.dialog.open(PopupMsgComponent,{
     data:data1
 }
);

//  dialogRef.afterClosed().subscribe(()=>{
//    this.location.back();
//  })
  return dialog_ref;
 }

}


