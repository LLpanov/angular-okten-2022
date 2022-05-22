import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constant";
import {IComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {

  }

  getALL(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }

  getById(id: string): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}
