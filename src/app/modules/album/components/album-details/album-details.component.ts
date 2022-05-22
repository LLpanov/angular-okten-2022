import {Component, OnInit} from '@angular/core';

import {IAlbum} from "../../interfaces";
import {AlbumService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: IAlbum;

  constructor(private albumService: AlbumService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.albumService.getById(id).subscribe(value => this.album = value)
    })
  }

}
