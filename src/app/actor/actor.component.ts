import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input()
  actor: any;

  basePath = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;

  constructor() {}

  ngOnInit() {}
}
