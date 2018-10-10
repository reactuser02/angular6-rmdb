import { Component, OnInit } from '@angular/core';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  heroImage: any;
  currentPage = 0;
  totalPages = 0;
  loading = false;
  searchTerm = '';

  constructor() {}

  ngOnInit() {
    this.loading = true;
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);
  }

  fetchItems = url => {
    fetch(url)
      .then(response => response.json(), err => console.error(err))
      .then(response => {
        this.movies = [...this.movies, ...response.results];
        this.heroImage = response.results[0];
        if (this.heroImage) {
          this.heroImage.image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}/${
            this.heroImage.backdrop_path
          }`;
        }
        this.currentPage = response.page;
        this.totalPages = response.total_pages;
        this.loading = false;
      });
  };

  loadMoreItems = () => {
    let endpoint = '';
    this.loading = true;

    if (this.searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.searchTerm
      }&page=${this.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  };

  searchItems = searchTerm => {
    let endpoint = '';
    this.movies = [];
    this.loading = true;
    this.searchTerm = searchTerm;

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`;
    }
    this.fetchItems(endpoint);
  };
}
