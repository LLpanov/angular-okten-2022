import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentDetailsResolver, CommentsResolver} from "./services";
import {CommentDeactivateGuard} from "./guards";

const routes: Routes = [{
  path: '', component: CommentsComponent, resolve: {data: CommentsResolver}, children: [{
    path: ':id', component: CommentDetailsComponent, resolve: {data: CommentDetailsResolver},
    canDeactivate:[CommentDeactivateGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class CommentRoutingModule {
}
