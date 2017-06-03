import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

    constructor(private http:Http) {}

    private moviesSearchUrl = BASE_URL+"movies/";
    private token = "1d4c626449c43443d13fbf7ffd93fd594f042599";

    searchMovies(terms: Observable<string>) {
        return terms.debounceTime(200)
                    .distinctUntilChanged()
                    .switchMap(term => this.getMoviesBySearchkey(term));
    }

    getMoviesBySearchkey(searchkey:string):Observable<any> {
        let header = new Headers();
        header.append("Authorization", "Token "+this.token);
        return this.http.get(this.moviesSearchUrl+"?searchkey="+searchkey,{headers: header})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
}