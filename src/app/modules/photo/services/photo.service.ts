import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhoto} from "../interfaces";
import {urls} from "../../../constant";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {

  }

  getALl(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(urls.photos)
  }

  getById(id: string): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`${urls.photos}/${id}`)
  }

}

