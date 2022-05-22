import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPhoto} from "../../interfaces";
import {PhotoService} from "../../services";

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photo: IPhoto

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.photoService.getById(id).subscribe(value => this.photo = value)
    })
  }

}
