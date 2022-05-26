import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {LayoutComponent} from "./layout/layout/layout.component";

const routes: Routes = [
  {path:'',component:LayoutComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)


  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
