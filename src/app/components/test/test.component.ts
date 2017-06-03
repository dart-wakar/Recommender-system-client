import { Component,OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    slctdMovie:any;
    recommendedMovies:any;

    constructor(private recommendedMoviesService: RecommendedMoviesService,private router:Router) {}

    ngOnInit() {
        
    }

    onMovieSelect(movie:any) {
        this.slctdMovie = movie;
    }

    goToLogin() {
        this.router.navigate(['login/']);
    }

    goToRegister() {
        this.router.navigate(['register/']);
    }
}
