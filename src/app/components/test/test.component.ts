import { Component,OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    movies: any[];

    constructor(private searchService:SearchService) {}

    ngOnInit() {
        this.getMovies();
    }

    getMovies() {
        this.searchService.getMoviesBySearchkey("heavy")
            .subscribe(movies => {
                console.log(movies);
                this.movies = movies;
            },err => console.log(err));
    }
}
