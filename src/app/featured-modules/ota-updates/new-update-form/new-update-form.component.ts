import { deviceTypes } from './../../../shared/datagenerator/datagenerator.dev';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Form } from '../ota.model';

@Component({
  selector: 'app-new-update-form',
  templateUrl: './new-update-form.component.html',
  styleUrls: ['./new-update-form.component.scss'],
})
export class NewUpdateFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  files: any;
  fileFetchError: boolean;
  showError: boolean;
  updatesForm: FormGroup;
  form: Form;
  deviceTypes: string[];
  loader = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.fileFetchError = false;
    this.showError = false;
    this.deviceTypes = deviceTypes;
  }

  createForm() {
    this.updatesForm = this.fb.group({
      otaName: ['', Validators.required],
      deviceType: ['', Validators.required],
      otaVersion: ['', Validators.required],
      otaDescription: ['', Validators.required],
      fileUrl: null,
    });
  }

  onSubmit() {
    if (this.files == null) {
      this.fileFetchError = true;
    }
    if (this.updatesForm.invalid) {
      this.showError = true;
      return;
    } else if (this.files != null) {
      this.loader = true;
      this.showError = false;
      setTimeout(() => {
      this.loader = false;

      const formData: FormData = new FormData();
      formData.append('file', this.files, this.files.name);
      this.updatesForm.patchValue({
        fileUrl: formData.get('file'),
      });
      this.form = this.updatesForm.value;
      console.log(this.form);
      this.files = null;
      this.updatesForm.markAllAsTouched();
      this.updatesForm.reset();
      this.myForm.resetForm();
      }, 700);
    }
  }

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  prepareFilesList(file: any) {
    file[0].progress = 0;
    this.files = file[0];

    this.uploadFilesSimulator();
  }

  uploadFilesSimulator() {
    setTimeout(() => {
      if (this.files) {
        const progressInterval = setInterval(() => {
          if (this.files.progress === 100) {
            clearInterval(progressInterval);
            this.fileFetchError = false;
          } else {
            this.files.progress += 5;
          }
        }, 100);
      }
    }, 500);
  }

  deleteFile() {
    this.files = null;
    this.fileFetchError = true;
  }

  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
