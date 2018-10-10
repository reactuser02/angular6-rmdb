import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input()
  movie: any;
  @Input()
  directors: any;

  basePath = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;

  constructor() {}

  ngOnInit() {}
}
