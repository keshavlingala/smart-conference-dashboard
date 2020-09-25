import {Component, OnDestroy, OnInit} from '@angular/core';
import {GenerateKeysService} from '../generate-keys.service';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-generate-keys-home',
  templateUrl: './generate-keys-home.component.html',
  styleUrls: ['./generate-keys-home.component.scss']
})
export class GenerateKeysHomeComponent implements OnInit, OnDestroy {
  form: FormGroup;
  usedKeys: string[];
  unusedKeys: string[];
  usedKeysCount: number;
  unUsedKeysCount: number;
  generatedKeys: Keys;
  usedPage = 0;
  unusedPage = 0;
  deviceSearch: FormGroup;
  allDeviceTypes: string[];
  filteredDeviceTypes: string[];
  subs: Subscription[] = [];

  constructor(
    public keysService: GenerateKeysService,
    private clipboard: Clipboard,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.allDeviceTypes = this.keysService.deviceTypes;
    this.deviceSearch = this.fb.group({
      search: ['']
    });
    this.form = this.fb.group({
      deviceType: ['', Validators.required],
      numberOfKeys: ['', [Validators.required, Validators.min(1), Validators.pattern('(^\\d{0,3}$)|(^1000$)')]]
    });
    this.filteredDeviceTypes = this.allDeviceTypes;
    this.subs.push(this.deviceSearch.valueChanges.subscribe(() => {
      const key = this.deviceSearch.value.search;
      this.filteredDeviceTypes = this.allDeviceTypes.filter(d => {
        return d.toLowerCase().includes(key.toLowerCase());
      });
    }));
    this.subs.push(this.form.valueChanges.subscribe(() => {
      this.reset();
    }));
    // this.keys = this.keysService.generateKeys('TiTag', 6).keys
  }

  reshape(keys: Keys) {
    const used = [];
    const unused = [];
    while (keys.used.length) {
      used.push(keys.used.splice(0, 10));
    }
    while (keys.unused.length) {
      unused.push(keys.unused.splice(0, 10));
    }
    return {used, unused};
  }

  generateKeys() {
    if (this.form.invalid) {
      this.snack.open('Select DeviceType and number of keys', 'Dismiss', {
        duration: 1000
      });
      return;
    }
    const {deviceType, numberOfKeys} = this.form.value;
    this.usedKeys = this.keysService.generate(deviceType, numberOfKeys).usedKeys;
    this.unusedKeys = this.keysService.generate(deviceType, numberOfKeys).unusedKeys;
    this.usedKeysCount = this.keysService.generate(deviceType, numberOfKeys).usedCount;
    this.unUsedKeysCount = this.keysService.generate(deviceType, numberOfKeys).unusedCount;
    console.log(this.form.value);
  }

  copyToClipboard(key: string) {
    this.clipboard.copy(key);
    this.snack.open('Copied to Clipboard', 'Dismiss', {
      duration: 500
    });
  }

  deviceSelected() {
    // console.log('Changed')
  }

  usedPageChange(n: number) {
    this.usedPage = n;
    console.log(this.usedPage, this.form.value);
  }

  unusedPageChange(n: number) {
    this.unusedPage = n;
    console.log(this.unusedPage, this.form.value);
  }

  reset() {
    this.usedKeys = undefined;
    this.unusedKeys = undefined;
    this.usedPage = this.unusedPage = 0;
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}

export interface Keys {
  used: string[];
  unused: string[];
}
