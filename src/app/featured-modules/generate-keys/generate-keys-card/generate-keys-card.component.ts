import {Component, OnInit} from '@angular/core';
import {GenerateKeysService} from 'src/app/featured-modules/generate-keys/generate-keys.service';
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-generate-keys-card',
  templateUrl: './generate-keys-card.component.html',
  styleUrls: ['./generate-keys-card.component.scss']
})
export class GenerateKeysCardComponent implements OnInit {
  title = "Generate Keys";
  allDeviceTypes: string[]
  deviceTypes = new BehaviorSubject<string[]>([]);
  selected: boolean;
  selectedDeviceType: string;
  allKeys;
  keys = new BehaviorSubject<string[]>([])
  deviceSearch: FormGroup;
  pages: string[][];
  pageIndex = 0;

  constructor(private keysService: GenerateKeysService,
              private clipboard: Clipboard,
              private snack: MatSnackBar,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.deviceSearch = this.fb.group({
      deviceType: ['']
    })
    this.allDeviceTypes = this.keysService.deviceTypes;
    this.selected = false;
    this.deviceTypes.next(this.allDeviceTypes);
    this.deviceSearch.valueChanges.subscribe(change => {
      console.log(change);
      let key = this.deviceSearch.value.deviceType;
      this.deviceTypes.next(this.allDeviceTypes.filter(name => {
        return name.includes(key);
      }))
    })
  }

  reshape(keys: string[]) {
    let pages = [];
    while (keys.length) pages.push(keys.splice(0, 7));
    return pages;
  }

  change(type) {
    console.log(this.selected);
    this.selected = true;
    this.allKeys = this.keysService.generateKeys(type, 50).keys.used;
    this.pages = this.reshape(this.allKeys.slice())
    this.pageIndex = 0;
    this.keys.next(this.pages[this.pageIndex])
  }

  onPageChange(index) {
    this.pageIndex = index;
    this.keys.next(this.pages[this.pageIndex])
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

  filterDeviceType($event: KeyboardEvent) {
    console.log($event)
  }
}
