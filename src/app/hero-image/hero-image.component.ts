import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  @Input()
  image: string;
  @Input()
  title: string;

  @Input()
  text: string;

  constructor() {}

  ngOnInit() {}
}
