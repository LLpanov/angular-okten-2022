import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from "@angular/common/http";
import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "./services";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentModule { }
