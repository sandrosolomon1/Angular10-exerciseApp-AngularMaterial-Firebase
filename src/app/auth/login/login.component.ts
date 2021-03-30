import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AuthData} from "../../shared/interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    const user: AuthData = {
      email: f.value.email,
      password: f.value.password
    }

    this.auth.SignIn(user)
  }
}
