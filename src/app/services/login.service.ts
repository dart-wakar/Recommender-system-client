import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

    private token:string;

    constructor(private http:Http) {}

    private loginUrl = BASE_URL+"api-token-auth/";
    private headers = new Headers({'Content-Type':'application/json'});
    login(username:string, password:string):Observable<any> {
        console.log(JSON.stringify({username: username,password: password}));
        return this.http.post(this.loginUrl,JSON.stringify({username: username,password: password}),{headers: this.headers})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')});
    }

}