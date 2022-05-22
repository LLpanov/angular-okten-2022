import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constant";
import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getALL(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(urls.todos);
  }

  getById(id: string): Observable<ITodo> {
    return this.httpClient.get<ITodo>(`${urls.todos}/${id}`)
  }

}
