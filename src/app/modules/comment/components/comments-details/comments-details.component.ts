import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private commentService:CommentService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentService.getById(id).subscribe(value => this.comment = value)
    })
  }

}
