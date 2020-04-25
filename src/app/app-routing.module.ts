import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginSignupComponent} from './login-signup/login-signup.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideopocComponent } from './videopoc/videopoc.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'login',
    component: LoginSignupComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'video',
    component: VideopocComponent,
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
