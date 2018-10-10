import { Component, OnInit } from '@angular/core';
import { API_URL, API_KEY } from '../config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie = null;
  actors = null;
  directors = [];
  loading = false;

  movieId = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('movieId');

    const endpoint = `${API_URL}movie/${
      this.movieId
    }?api_key=${API_KEY}&language=en-US`;
    this.loading = true;
    // fetch movie
    this.fetchItems(endpoint);
  }

  fetchItems = url => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response.status_code) {
          this.loading = false;
        } else {
          this.movie = response;

          // fetch actors
          const endpoint = `${API_URL}movie/${
            this.movieId
          }/credits?api_key=${API_KEY}&language=en-US`;
          fetch(endpoint)
            .then(actorsResponse => actorsResponse.json())
            .then(actorsResponse => {
              const directors = actorsResponse.crew.filter(
                member => member.job === 'Director'
              );

              this.actors = actorsResponse.cast;
              this.directors = directors;
              this.loading = false;
            });
        }
      })
      .catch(error => console.error('Error:', error));
  };
}
