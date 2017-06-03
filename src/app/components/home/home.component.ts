import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    componentName = 'Home';

    constructor(private router: Router) {}

    logout(){
        console.log(localStorage.getItem("token"));
        localStorage.clear();
        console.log(localStorage.getItem("token"));
        this.router.navigate(['test/']);
    }
}
