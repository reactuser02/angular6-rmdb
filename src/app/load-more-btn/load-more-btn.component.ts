import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more-btn',
  templateUrl: './load-more-btn.component.html',
  styleUrls: ['./load-more-btn.component.css']
})
export class LoadMoreBtnComponent implements OnInit {
  @Output()
  loadMoreItems = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  loadMore() {
    this.loadMoreItems.emit(true);
  }
}
