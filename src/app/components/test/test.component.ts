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

    ngOnInit() {
        
    }

    onMovieSelect(movie:any) {
        this.slctdMovie = movie;
    }
}
