import {Component, OnInit} from '@angular/core';
import {GenerateKeysService} from 'src/app/featured-modules/generate-keys/generate-keys.service';
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-generate-keys-card',
  templateUrl: './generate-keys-card.component.html',
  styleUrls: ['./generate-keys-card.component.scss']
})
export class GenerateKeysCardComponent implements OnInit {
  title = "Generate Keys";
  deviceTypes: string[]
  selected: boolean;
  selectedDeviceType: string;
  keys;

  constructor(private keysService: GenerateKeysService,
              private clipboard: Clipboard,
              private snack: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.deviceTypes = this.keysService.deviceTypes;
    this.selected = false;
  }

  change(type) {
    console.log(this.selected);
    this.selected = true;
    this.keys = this.keysService.generateKeys(type, 30).keys.unused;
  }

  viewKeys(type) {
    this.selectedDeviceType = type;
    this.change(type);
  }

  copyToClipboard(key: string) {
    this.clipboard.copy(key);
    this.snack.open('Copied to Clipboard', 'Dismiss', {
      duration: 500
    })
  }

  viewMainPage() {
    this.selected = !this.selected;
  }
}
