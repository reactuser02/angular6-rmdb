import { Component, OnInit, Input } from '@angular/core';
import { calcTime, convertMoney } from '../helpers';

@Component({
  selector: 'app-movie-info-bar',
  templateUrl: './movie-info-bar.component.html',
  styleUrls: ['./movie-info-bar.component.css']
})
export class MovieInfoBarComponent implements OnInit {
  @Input()
  time: any;
  @Input()
  budget: any;
  @Input()
  revenue: any;

  calcTime = calcTime;
  convertMoney = convertMoney;

  constructor() {}

  ngOnInit() {}
}
