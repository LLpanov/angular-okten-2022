import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {PostService} from "../post.service";

import {IPost} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getAll();
  }


}
