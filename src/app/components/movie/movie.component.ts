import { Component,Input } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  @Input() movie:any;
}
