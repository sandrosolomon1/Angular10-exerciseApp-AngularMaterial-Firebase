import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  OnDestroy{
  title = 'material'
  authstate: boolean = false
  sub: Subscription

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.LogOut()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.sub = this.auth.AuthState.subscribe(State => {
      this.authstate = State
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
