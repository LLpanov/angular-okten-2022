import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import {AlbumService} from "./services";


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HttpClientModule
  ],
  providers:[
    AlbumService
  ]
})
export class AlbumModule { }
