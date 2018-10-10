import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

@Component({
  selector: 'app-movie-thumb',
  templateUrl: './movie-thumb.component.html',
  styleUrls: ['./movie-thumb.component.css']
})
export class MovieThumbComponent implements OnInit {
  @Input()
  movie: any;

  basePath = `${IMAGE_BASE_URL}${POSTER_SIZE}`;

  constructor() {}

  ngOnInit() {}
}
