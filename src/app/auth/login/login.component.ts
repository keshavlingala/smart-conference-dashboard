import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm;
  public loginLoading:boolean = false;
  @Output() public onLogin = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    this.loginLoading = true;
    this.loginForm.disable();
    setTimeout(()=>{
      this.onLogin.emit();
    },2000)
  }
}
