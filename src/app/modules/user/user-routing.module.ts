import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserDetailsResolver, UsersResolver} from "./services";
import {UserActivateGuard} from "./guards";

const routes: Routes = [{
  path: '', component: UsersComponent, resolve: {data: UsersResolver}, children: [{
    path: ':id', component: UserDetailsComponent, resolve: {data: UserDetailsResolver},
    canActivate:[UserActivateGuard]

  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class UserRoutingModule {
}
