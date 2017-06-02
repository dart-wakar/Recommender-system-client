import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PreferencesService {

    constructor(private http: Http) {}

    private getAllPreferencesUrl = BASE_URL+"preferences/";
    private token = "4ace668d5cdc98b9927d9b7e4de1c46b07bfc7ac";

    getAllPreferences():Observable<any> {
        let header = new Headers();
        header.append("Authorization", "Token "+this.token);
        return this.http.get(this.getAllPreferencesUrl,{headers: header})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
}