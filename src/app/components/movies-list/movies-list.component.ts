import { Component,Input } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent {
    @Input() movies:any;
}
