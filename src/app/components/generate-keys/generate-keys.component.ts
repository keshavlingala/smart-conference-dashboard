import { deviceTypes } from './../../shared/datagenerator/datagenerator.dev';
import { Component, OnInit } from '@angular/core';
import { GenerateKeysService } from 'src/app/featured-modules/generate-keys/generate-keys.service';
import { MatOptionSelectionChange } from '@angular/material/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-generate-keys',
  templateUrl: './generate-keys.component.html',
  styleUrls: ['./generate-keys.component.scss']
})
export class GenerateKeysComponent implements OnInit {
  title = "Generate Keys";
  constructor(private keysService: GenerateKeysService) { }
  deviceTypes: string[]
  selected:boolean;
  selectedDeviceType:string;
  keys;
  private clipboard: Clipboard
  ngOnInit(): void {
    this.deviceTypes = this.keysService.deviceTypes;
    this.selected=false;
  }
  change(type){
    console.log(this.selected);
    this.selected=true;
    this.keys= this.keysService.generateKeys(type,30).keys.unused;
  }
  viewKeys(type)
  {
    this.selectedDeviceType= type;
    this.change(type);
  }
  copyToClipboard(key: string) {
    // this.clipboard.copy(key);
    // this.snack.open('Copied to Clipboard', 'Dismiss', {
    //   duration: 500
    // })
  }
  viewMainPage()
  {
    this.selected= !this.selected;
  }
}
