import {NgModule} from "@angular/core";
import {PreloadAllModules, Router, RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./shared/Guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signup', redirectTo: '/login/signup', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports : [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports : [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
