import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output()
  search = new EventEmitter<string>();

  searchTerm = '';

  timeout = null;

  constructor() {}

  ngOnInit() {}

  onChange() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.search.emit(this.searchTerm);
    }, 500);
  }
}
