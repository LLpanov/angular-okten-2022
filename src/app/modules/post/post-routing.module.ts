import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostDetailsResolver, PostResolver} from "./services";
import {PostActivateGuard} from "./guards";


const routes: Routes = [{
  path: '', component: PostsComponent, resolve: {data: PostResolver}, children: [{
    path: ':id', component: PostDetailsComponent, resolve: {data: PostDetailsResolver},
    canActivate: [PostActivateGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class PostRoutingModule {
}
