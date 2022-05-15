import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import { UsersComponent } from './component/users/users/users.component';
import { UserComponent } from './component/user/user/user.component';
import { PostsComponent } from './component/posts/posts/posts.component';
import { PostComponent } from './component/post/post/post.component';
import { CommentsComponent } from './component/comments/comments/comments.component';
import { CommentComponent } from './component/comment/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
