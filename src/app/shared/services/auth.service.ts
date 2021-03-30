import { Injectable } from '@angular/core';
import {AuthData, User} from "../interfaces/user";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User = null
  public AuthState: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router) { }

  private success(): void {
    this.AuthState.next(true)
    this.router.navigate(['./training'])
  }

  SignIn(data: AuthData) {
    console.log(data)

    this.user = {
      email: data.email,
      userid: '1'
    }

    this.success()
  }

  SignUp(data: AuthData) {
    console.log(data)

    this.user = {
      email: data.email,
      userid: '1'
    }

    this.success()
  }

  LogOut() {
    this.user = null
    this.AuthState.next(false)
    this.router.navigate(['./login'])
  }

  GetUser(userid: string) {
    return {...this.user}
  }

  IsAuth() {
    return this.user !== null
  }
}
