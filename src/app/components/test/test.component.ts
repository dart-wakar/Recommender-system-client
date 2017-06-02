import { Component,OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    movies: any[];

    constructor(private moviesService:MoviesService) {}

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.moviesService.getMoviesFromListOfIds([25,830])
            .subscribe(movies => {
                console.log(movies);
                this.movies = movies;
            },err => console.log(err));
    }
}
