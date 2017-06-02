import { Component,OnInit } from '@angular/core';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    movies: any[];

    constructor(private recommendedMoviesService:RecommendedMoviesService) {}

    ngOnInit() {
        this.getMovieRecommendations();
    }

    getMovieRecommendations() {
        this.recommendedMoviesService.getRecommendationsForSingleMovie(58)
            .subscribe(movies => {
                console.log(movies);
                this.movies = movies
            },err => console.log(err));
    }
}
