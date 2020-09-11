import {Component, OnInit} from '@angular/core';
import {GenerateKeysService} from "../generate-keys.service";
import {Clipboard} from '@angular/cdk/clipboard'
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-generate-keys-home',
  templateUrl: './generate-keys-home.component.html',
  styleUrls: ['./generate-keys-home.component.scss']
})
export class GenerateKeysHomeComponent implements OnInit {
  deviceTypes: string[]
  keys;
  selectedDevice: string;
  numberOfKeys: number;

  constructor(
    private keysService: GenerateKeysService,
    private clipboard: Clipboard,
    private snack: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.deviceTypes = this.keysService.deviceTypes
    // this.keys = this.keysService.generateKeys('TiTag', 6).keys
  }


  generateKeys() {
    if (!this.numberOfKeys || !this.selectedDevice) {
      this.snack.open('Select DeviceType and number of keys', 'Dismiss', {
        duration: 1000
      })
      return
    }
    this.keys = this.keysService.generateKeys(this.selectedDevice, this.numberOfKeys).keys
  }

  copyToClipboard(key: string) {
    this.clipboard.copy(key);
    this.snack.open('Copied to Clipboard', 'Dismiss', {
      duration: 500
    })
  }

  deviceSelected() {
    console.log('Changed')
    this.keys = undefined
    this.numberOfKeys = undefined
  }
}
