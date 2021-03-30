import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {AuthData, User} from "../../shared/interfaces/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    if(f.valid) {

      const user: AuthData = {
        email: f.value.email,
        password: f.value.password
      }

      this.auth.SignUp(user)
    }
  }
}
