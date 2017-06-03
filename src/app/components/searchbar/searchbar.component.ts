import { Component,Output,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html'
})
export class SearchbarComponent  { 
    searchKey = new BehaviorSubject<string>("");
    showSuggestions:boolean = false;
    movies: any[];
    key:string;
    currentTerm:string;
    selectedMovie:any;

    @Output() onMovieSelected = new EventEmitter<any>();

    constructor(private searchService: SearchService) {
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
    }

    selectItem(movie:any) {
        this.key = movie.title;
        this.showSuggestions = false;
        this.selectedMovie = movie;
    }

    passMovie() {
        console.log(this.selectedMovie);
        this.onMovieSelected.emit(this.selectedMovie);
    }

}
