import { Component,Input,OnInit,OnChanges } from '@angular/core';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';

@Component({
  selector: 'recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls:['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit,OnChanges {

     componentName = 'RecommendedMovies';
     @Input() inputMovie:any;
     recommendedMovies:any;

     constructor(private recommendedMoviesService: RecommendedMoviesService) {}

     ngOnInit() {
         this.getRecommendedMovies();
     }

     ngOnChanges() {
         this.getRecommendedMovies();
     }

     getRecommendedMovies() {
         this.recommendedMoviesService.getRecommendationsForSingleMovie(this.inputMovie.id)
            .subscribe(recommendedMovies => {
                console.log(recommendedMovies);
                this.recommendedMovies = recommendedMovies;
            },err => console.log(err));
     }

}
