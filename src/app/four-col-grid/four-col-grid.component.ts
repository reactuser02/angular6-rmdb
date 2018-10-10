import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-four-col-grid',
  templateUrl: './four-col-grid.component.html',
  styleUrls: ['./four-col-grid.component.css']
})
export class FourColGridComponent implements OnInit {
  @Input()
  movies: any;
  @Input()
  actors: any;
  @Input()
  header: string;
  @Input()
  searchTerm: string;
  @Input()
  loading: boolean;

  constructor() {}

  ngOnInit() {}
}
