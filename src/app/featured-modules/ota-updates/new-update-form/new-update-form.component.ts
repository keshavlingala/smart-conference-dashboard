import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from '../otaform';


@Component({
  selector: 'app-new-update-form',
  templateUrl: './new-update-form.component.html',
  styleUrls: ['./new-update-form.component.scss']
})


export class NewUpdateFormComponent implements OnInit {
  files: any[] = [];
  fileFetchError:boolean;
  updatesForm: FormGroup;
  form: Form;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.fileFetchError= false;
  }
  createForm() {
    this.updatesForm = this.fb.group({
    otaName:  ['', Validators.required ],
    deviceType:  '1',
    otaVersion: ['', Validators.required ],
    description: ['', Validators.required ],
    files: [],
    });
  }

  onSubmit() {
    if(this.files.length==0){
      this.fileFetchError=true;
    }else{
      this.fileFetchError=false;
    this.updatesForm.patchValue({
      files: this.files,
    })
    this.form = this.updatesForm.value;
    console.log(this.form);
    this.files=[];
    this.updatesForm.reset({
      otaName:  '',
      deviceType:  '1',
      otaVersion: '',
      description: '',
      });
    }
  }
  onFileDropped($event) {
    this.prepareFilesList($event);
  }
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }


  deleteFile(index: number) {
    this.files.splice(index, 1);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
            this.fileFetchError= false;
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
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
