import {Component, OnInit} from '@angular/core';
import {GenerateKeysService} from "../generate-keys.service";
import {Clipboard} from '@angular/cdk/clipboard'
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-generate-keys-home',
  templateUrl: './generate-keys-home.component.html',
  styleUrls: ['./generate-keys-home.component.scss']
})
export class GenerateKeysHomeComponent implements OnInit {
  form: FormGroup;
  usedKeys = new BehaviorSubject<string[]>(null);
  unusedKeys = new BehaviorSubject<string[]>(null);
  generatedKeys: Keys
  pages: { used: string[][], unused: string[][] };
  usedPage = 0;
  unusedPage = 0;


  constructor(
    public keysService: GenerateKeysService,
    private clipboard: Clipboard,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      deviceType: ['', Validators.required],
      numberOfKeys: ['', [Validators.required, Validators.min(1), Validators.pattern('(^\\d{0,3}$)|(^1000$)')]]
    })

    // this.keys = this.keysService.generateKeys('TiTag', 6).keys
  }

  reshape(keys: Keys) {
    const used = []
    const unused = []
    while (keys.used.length) used.push(keys.used.splice(0, 4));
    while (keys.unused.length) unused.push(keys.unused.splice(0, 4));
    return {used, unused}
  }

  generateKeys() {
    if (this.form.invalid) {
      this.snack.open('Select DeviceType and number of keys', 'Dismiss', {
        duration: 1000
      })
      return
    }
    const {deviceType, numberOfKeys} = this.form.value
    this.generatedKeys = this.keysService.generateKeys(deviceType, numberOfKeys).keys
    this.pages = this.reshape(this.generatedKeys);
    console.log(this.pages)
    this.usedKeys.next(this.pages.used[this.usedPage]);
    this.unusedKeys.next(this.pages.unused[this.unusedPage]);
  }

  copyToClipboard(key: string) {
    this.clipboard.copy(key);
    this.snack.open('Copied to Clipboard', 'Dismiss', {
      duration: 500
    })
  }

  deviceSelected() {
    console.log('Changed')
  }

  usedPageChange(number: number) {
    this.usedPage = number;
    this.usedKeys.next(this.pages.used[this.usedPage]);
  }

  unusedPageChange(number: number) {
    this.unusedPage = number;
    this.unusedKeys.next(this.pages.unused[this.unusedPage])
  }
}

export interface Keys {
  used: string[],
  unused: string[]
}
