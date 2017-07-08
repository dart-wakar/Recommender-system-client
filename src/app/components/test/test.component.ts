import { Component,OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { RecommendedMoviesService } from '../../services/recommended-movies.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {
    componentName = 'Test';
    slctdMovie:any;
    recommendedMovies:any;


    constructor(private recommendedMoviesService: RecommendedMoviesService,private router:Router) {}

    ngOnInit() {
        var last = $('.time-line-icon').last();
        var first = $('.time-line-icon').first();

        /** time line div and query div set on init */
        $("#time-line-center").css("height",last.offset().top - first.offset().top+32);
        $("#queries").css("width", $("#contact").width());

        /** timer for slider movies showcase behind recoto.me description */
        function myFunction() {
            setInterval(function(){

            }, 1000);
        }

        /** time line size update on resize */
        $(window).on('resize',function(){
            $("#time-line-center").css("height",last.offset().top - first.offset().top+32);
            $("#queries").css("width", $("#contact").width());
        });

        $(window).on('scroll',function(){

            /** time line animations */

            $(".t-float-left").each(function(){
                if($(window).scrollTop()+(2*$(window).height()/3)>$(this).offset().top){
                    $(this).animate({
                        left:"0px",
                        opacity:1
                    },function(){

                    });
                }
            });
            $(".t-float-right").each(function(){
                if($(window).scrollTop()+(2*$(window).height()/3)>$(this).offset().top){
                    $(this).animate({
                        left:"0px",
                        opacity:1
                    },function(){

                    });
                }
            });

            /** time line icon animation */

            $(".time-line-icon").each(function(){
                if($(window).scrollTop()+(2*$(window).height()/3)>$(this).offset().top){
                    $(this).animate({
                        opacity:1
                    },function(){

                    });
                }
            });
        });
    }

    goToDesc(){
        $('html,body').animate({
            scrollTop: $("#desc-holder").offset().top-$("#header-container").height()},
            'slow');
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
