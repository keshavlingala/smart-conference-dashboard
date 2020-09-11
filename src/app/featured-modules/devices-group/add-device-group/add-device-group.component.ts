import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import { Card, Setting } from './../../../common/card-module/models/card.model';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-device-group',
  templateUrl: './add-device-group.component.html',
  styleUrls: ['./add-device-group.component.scss']
})
export class AddDeviceGroupComponent implements OnInit {

 DeviceGroupForm : FormGroup;
  dropdownList = [];
  selectedItems = [];
  selectedCard =[];
  dropdownSettings:IDropdownSettings ;
  hetroFlag : boolean= false;
  selectedIndex = 0;
  public finalData = [];
  @ViewChild('form1') form1;
  result = {
    "groupName":"",
    "deviceTypes":[],
    "groupType":"",
    "devices":[]
  }
  constructor( private fb :FormBuilder) { }
  ngOnInit(): void {
    
    this.DeviceGroupForm = this.fb.group({
      GroupName : ['', Validators.required],
      GroupType : [''],
      DeviceType : [[],[Validators.required , Validators.minLength(2)]]
    });
    
  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
       
    };
    this.dropdownList = [
      { id: 1, item_text: 'Mumbai' },
      { id: 2, item_text: 'Bangaluru' },
      { id: 3, item_text: 'Pune' },
      { id: 4, item_text: 'Navsari' },
      { id: 5, item_text: 'New Delhi' }
    ];
  }

  selectionChange($event: StepperSelectionEvent) {
    this.selectedIndex = $event.selectedIndex;
    if ($event.selectedIndex === 0) {
      this.DeviceGroupForm.enable()
    } else {
      this.DeviceGroupForm.disable();
      
      
      
    }
  }



    DeviceType=[
      { id: 1, item_text: 'Mumbai' },
      { id: 2, item_text: 'Bangaluru' },
      { id: 3, item_text: 'Pune' },
      { id: 4, item_text: 'Navsari' },
      { id: 5, item_text: 'New Delhi' }
    ];
    groupname:string="" ;
    devicetype:string="";
    grouptype:string="";
    existingGroup:boolean=false;
    
    tempData=[
      {
        "id": 1,
        "Title": "B",
         "Content" : "This is content 1",
         "Footer"  : "This is Footer 1",
         "Date" : "2020-05-31T12:42:12.598Z"
      },
      {
        "id": 2,
        "Title": "C",
         "Content" : "This is content 2",
         "Footer"  : "This is Footer 2",
         "Date" : "2026-07-04T12:42:12.598Z"
      },
      {
        "id": 3,
        "Title": "A",
         "Content" : "This is content 3",
         "Footer"  : "This is Footer 3",
         "Date" : "2016-09-14T12:42:12.598Z"
      },
      {
        "id": 4,
        "Title": "D",
         "Content" : "This is content 4",
         "Footer"  : "This is Footer 4",
         "Date" : "2022-08-04T12:42:12.598Z"
      },
      {
        "id": 5,
        "Title": "E",
         "Content" : "This is content 5",
         "Footer"  : "This is Footer 5",
         "Date" : "2022-09-04T12:42:12.598Z"
      },
      {
        "id": 6,
        "Title": "F",
         "Content" : "This is content 6",
         "Footer"  : "This is Footer 6",
         "Date" : "2020-09-20T12:42:12.598Z"
      },
      {
        "id": 7,
        "Title": "G",
         "Content" : "This is content 7",
         "Footer"  : "This is Footer 7",
         "Date" : "2019-09-04T12:42:12.598Z"
      },
      {
        "id": 8,
        "Title": "H",
         "Content" : "This is content 8",
         "Footer"  : "This is Footer 8",
         "Date" : "2020-09-14T12:42:12.598Z"
      },
      {
        "id": 9,
        "Title": "I",
         "Content" : "This is content 9",
         "Footer"  : "This is Footer 9",
         "Date" : "2020-10-17T12:42:12.598Z"
      },
      {
        "id": 10,
        "Title": "J",
         "Content" : "This is content 10",
         "Footer"  : "This is Footer 10",
         "Date" : "2020-09-19T12:42:12.598Z"
      },
      {
        "id": 11,
        "Title": "K",
         "Content" : "This is content 11",
         "Footer"  : "This is Footer 11",
         "Date" : "2020-09-12T12:42:12.598Z"
      },
      {
        "id": 12,
        "Title": "L",
         "Content" : "This is content 12",
         "Footer"  : "This is Footer 12",
         "Date" : "2018-09-11T12:42:12.598Z"
      },
      {
        "id": 13,
        "Title": "M",
         "Content" : "This is content 13",
         "Footer"  : "This is Footer 13",
         "Date" : "2015-09-04T12:42:12.598Z"
      },
      {
        "id": 14,
        "Title": "N",
         "Content" : "This is content 14",
         "Footer"  : "This is Footer 14",
         "Date" : "2020-09-05T12:42:12.598Z"
      },
      {
        "id": 15,
        "Title": "O",
         "Content" : "This is content 15",
         "Footer"  : "This is Footer 15",
         "Date" : "2021-09-10T12:42:12.598Z"
      },
      {
        "id": 16,
        "Title": "P",
         "Content" : "This is content 16",
         "Footer"  : "This is Footer 16",
         "Date" : "2020-09-04T12:42:12.598Z"
      }
      ];
      
    submit()
    {
      console.log(" Group Name: "+this.groupname+" "+" Group Type: "+this.grouptype+" Device Type: "+this.devicetype);
      this.existingGroup=true;
    }
    onItemSelect(item: any) {
      // if(this.selectedItems.indexOf(item)===-1)
      // {this.selectedItems.push(item);}
      // else{
      //   this.selectedItems.splice(this.selectedItems.indexOf(item),1)
      // }
      
     
      if(this.selectedItems.length>1)
      {
        this.hetroFlag = true;
       // this.DeviceGroupForm.controls['valid'].setValue(false);
      //   console.log("object")
      // this.Form.valid===false;
      // console.log(this.Form);
       } 
      //  else{
      //    this.hetroFlag=false;
      //  }
      // console.log(item, this.Form.valid);
      // console.log(this.selectedItems , this.hetroFlag);
    }
    onSelectAll(items: any) {
      console.log(items);
    }

    // Catching Event from Card
    DatafromCard(event)
    {
     // this.selectedCard.push(event);
        this.selectedCard = event.map(String);
        console.log(this.selectedCard);
        this.finalData.push(this.DeviceGroupForm.value );
      
         var dummy = [];
     // console.log(this.finalData);
       if(this.DeviceGroupForm.controls['GroupType'].value==='Single')
        {
         this.result.deviceTypes.push(this.DeviceGroupForm.controls['DeviceType'].value.item_text );
        }
        if(this.DeviceGroupForm.controls['GroupType'].value==='Multi')
        {
          this.DeviceGroupForm.controls['DeviceType'].value.map(data=>{ dummy.push(data.item_text)});
          this.result.deviceTypes=dummy;
        }
       this.result.groupType= this.DeviceGroupForm.controls['GroupType'].value ;
       this.result.groupName= this.DeviceGroupForm.controls['GroupName'].value ;
       this.result.devices = this.selectedCard;
        console.log(this.result);
    }

    toggleCalled(){
      this.DeviceGroupForm.controls['DeviceType'].setValue('');
    }
}
