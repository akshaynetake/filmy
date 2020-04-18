import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  login;
  signup;

  ngOnInit() {
    this.login = true;
  }

  visibleSignUp(){
    this.signup = true
    this.login = false
  }

  visibleLogin(){
    this.signup = false
    this.login = true
  }

}
