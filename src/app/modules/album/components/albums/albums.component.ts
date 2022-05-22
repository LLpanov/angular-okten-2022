import {Component, OnInit} from '@angular/core';

import {IAlbum} from "../../interfaces";
import {AlbumService} from "../../services";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[]

  constructor(private albumService: AlbumService) {

  }

  ngOnInit(): void {
    this.albumService.getAll().subscribe(value => this.albums = value)
  }

}
