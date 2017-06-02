import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PreferencesService {

    constructor(private http: Http) {}

    private getAllPreferencesUrl = BASE_URL+"preferences/";
    private getPreferencesFromListOfIdsUrl = BASE_URL+"preferences/list/";
    private token = "1d4c626449c43443d13fbf7ffd93fd594f042599";

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

    getPreferencesFromListOfIds(ids: number[]):Observable<any> {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        header.append("Authorization", "Token "+this.token);
        return this.http.post(this.getPreferencesFromListOfIdsUrl,JSON.stringify({ids: ids}),{headers: header})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
}