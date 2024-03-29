import { DevicesGroupService } from './../../../core/services/devices-group.service';
import {Component, OnInit} from '@angular/core';
import {ActionChange, DataTableActions, DataTableConfig} from '../../../shared/models/data-table.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private service : DevicesGroupService,
    private router: Router
  ) {
  }
  
  // Popup message service
  // openDialog(){
  //  this.PopupMsgService.openDialog("success","Added Succesfully");
  // }


  columnNames=[ ' Group Name', 'Group Type', ' Created At'];
  title  =  "Devices Group"
  data=[];
  dataTableConfig: DataTableConfig;
  dataTableActions: DataTableActions;


  async ngOnInit(): Promise<any> {
    let Servicedata= this.service.getData();
    this.data = Servicedata[0];
   
    this.dataTableConfig = {
      checkbox: true,
      pageSize: 5,
      pageSizeOptions: [5, 10, 15, 20, 50],
      searchBox: true
    };
    this.dataTableActions = {
      actions: [
        {name: 'edit', icon: 'edit', color: 'primary'},
        {name: 'delete', icon: 'delete', color: 'warn'}
      ],
      bulkActions: [
        {icon: 'delete', name: 'delete', color: 'warn'},
        {icon: 'visibility', name: 'disable'}
      ],
    };
    
  }

  async actionChange($event: ActionChange): Promise<any> {
    let selected = $event.selected;
    switch ($event.type) {
      case 'action':
        selected = $event.selected as any;
        if ($event.name === 'delete') {
         
        }
        else if ($event.name === 'edit') {
          let selectedGroupId = $event.selected._id;
          this.router.navigate(['side-nav/devices-group/edit-group',selectedGroupId]);
         }
        break;
      case 'bulk-action':
        selected = $event.selected as any[];
        if ($event.name === 'delete') {
           

        } else if ($event.name === 'disable') {
          
        }
        break;
    }
   
  }

  filterChange($event: any[]): void {
    console.log($event);
  }

  

 

  


}
