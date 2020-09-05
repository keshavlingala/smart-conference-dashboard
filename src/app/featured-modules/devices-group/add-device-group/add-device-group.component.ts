import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Card, Setting } from './../../../common/card-module/models/card.model';
import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
  public finalData = [];
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
      allowSearchFilter: true
    };
    this.dropdownList = [
      { id: 1, item_text: 'Mumbai' },
      { id: 2, item_text: 'Bangaluru' },
      { id: 3, item_text: 'Pune' },
      { id: 4, item_text: 'Navsari' },
      { id: 5, item_text: 'New Delhi' }
    ];
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
        "Title": "Ankur is title 1",
         "Content" : "This is content 1",
         "Footer"  : "This is Footer 1"
      },
      {
        "id": 2,
        "Title": "This is title 2",
         "Content" : "This is content 2",
         "Footer"  : "This is Footer 2"
      },
      {
        "id": 3,
        "Title": "This is title 3",
         "Content" : "This is content 3",
         "Footer"  : "This is Footer 3"
      },
      {
        "id": 4,
        "Title": "This is title 4",
         "Content" : "This is content 4",
         "Footer"  : "This is Footer 4"
      },
      {
        "id": 5,
        "Title": "This is title 5",
         "Content" : "This is content 5",
         "Footer"  : "This is Footer 5"
      },
      {
        "id": 6,
        "Title": "This is title 6",
         "Content" : "This is content 6",
         "Footer"  : "This is Footer 6"
      },
      {
        "id": 7,
        "Title": "This is title 7",
         "Content" : "This is content 7",
         "Footer"  : "This is Footer 7"
      },
      {
        "id": 8,
        "Title": "This is title 8",
         "Content" : "This is content 8",
         "Footer"  : "This is Footer 8"
      },
      {
        "id": 9,
        "Title": "This is title 9",
         "Content" : "This is content 9",
         "Footer"  : "This is Footer 9"
      },
      {
        "id": 10,
        "Title": "This is title 10",
         "Content" : "This is content 10",
         "Footer"  : "This is Footer 10"
      },
      {
        "id": 11,
        "Title": "This is title 11",
         "Content" : "This is content 11",
         "Footer"  : "This is Footer 11"
      },
      {
        "id": 12,
        "Title": "This is title 12",
         "Content" : "This is content 12",
         "Footer"  : "This is Footer 12"
      },
      {
        "id": 13,
        "Title": "This is title 13",
         "Content" : "This is content 13",
         "Footer"  : "This is Footer 13"
      },
      {
        "id": 14,
        "Title": "This is title 14",
         "Content" : "This is content 14",
         "Footer"  : "This is Footer 14"
      },
      {
        "id": 15,
        "Title": "This is title 15",
         "Content" : "This is content 15",
         "Footer"  : "This is Footer 15"
      },
      {
        "id": 16,
        "Title": "This is title 16",
         "Content" : "This is content 16",
         "Footer"  : "This is Footer 16"
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
