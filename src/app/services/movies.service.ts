import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {

    constructor(private http: Http) {}

    private getMoviesFromListOfIdsUrl = BASE_URL+"movies/list/";
    private token = "1d4c626449c43443d13fbf7ffd93fd594f042599";

    getMoviesFromListOfIds(ids: number[]):Observable<any> {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        header.append("Authorization", "Token "+this.token);
        return this.http.post(this.getMoviesFromListOfIdsUrl,JSON.stringify({ids: ids}),{headers: header})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
    
}