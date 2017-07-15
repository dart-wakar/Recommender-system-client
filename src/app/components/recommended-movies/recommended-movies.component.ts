import { Component,Input,OnInit,OnChanges } from '@angular/core';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';

@Component({
  selector: 'recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls:['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit,OnChanges {

     componentName = 'Movies';
     @Input() inputMovie:any;
     recommendedMovies:any;

     constructor(private recommendedMoviesService: RecommendedMoviesService) {}

     ngOnInit() {
         this.getRecommendedMovies();

         /** on clicking the movies tab */
         $('#movie-tab').on("click",function(){
            $(this).css("background","#944");
            $('#app-tab').css("background","#22353c");
         });

         /** on clicking the apps tab */
         $('#app-tab').on("click",function(){
            $(this).css("background","#944");
            $('#movie-tab').css("background","#22353c");
         });
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
