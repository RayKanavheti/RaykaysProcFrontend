import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
export interface IUser {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private authSer: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  Login(credentials: IUser): void {
    this.route.navigateByUrl('/admin/home');
    // this.authSer.Login(credentials)
    // .subscribe( data => {
    //   sessionStorage.setItem('id_token', data.token);
    // });
  }
}
