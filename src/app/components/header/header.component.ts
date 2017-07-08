import {Component} from '@angular/core';
declare var $:any;

@Component({
    selector:'header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

    goUp(){
        $('html,body').animate({
            scrollTop: 0},
            'slow');
    }

    goToHowItWorks(){
        $('html,body').animate({
            scrollTop: $("#how-it-works").offset().top-$("#header-container").height()},
            'slow');
    }

    goToContact(){
        $('html,body').animate({
            scrollTop: $("#contact").offset().top-$("#header-container").height()},
            'slow');
    }

    goToDesc(){
        $('html,body').animate({
            scrollTop: $("#desc-holder").offset().top-$("#header-container").height()},
            'slow');
    }
}
