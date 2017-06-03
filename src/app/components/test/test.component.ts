import { Component,OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    slctdMovie:any;
    recommendedMovies:any;

    constructor(private recommendedMoviesService: RecommendedMoviesService) {}

    /*constructor(private searchService:SearchService,private recommendedMoviesService: RecommendedMoviesService) {
        var x= this;
        this.searchService.searchMovies(this.searchKey)
            .subscribe(movies => {
                x.searchKey.subscribe(term => this.currentTerm = term);
                if(this.currentTerm.length != 0) {
                    x.showSuggestions = true;
                    console.log(x.showSuggestions);
                } else {
                    this.showSuggestions = false;
                }
                this.movies = movies;
                console.log(this.movies)
            });
    }*/

    ngOnInit() {
        
    }

    /*selectItem(movie:any) {
        this.key = movie.title;
        this.showSuggestions = false;
        this.selectedMovie = movie;
    }*/
    
    getRecommendedMovies() {
        console.log(this.slctdMovie.id);
        this.recommendedMoviesService.getRecommendationsForSingleMovie(this.slctdMovie.id)
            .subscribe(movies => {
                console.log(movies);
                this.recommendedMovies = movies;
            },err => console.log(err));
    }

    onMovieSelect(movie:any) {
        this.slctdMovie = movie;
        this.getRecommendedMovies();
    }
}
