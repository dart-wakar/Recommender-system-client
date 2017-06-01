import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    
    constructor(private http:Http) {}

    private userRegisterUrl = BASE_URL+"users/register/";
    private headers = new Headers({'Content-Type':'application/json'});

    register(username:string,password:string,email:string) {
        return this.http.post(this.userRegisterUrl,JSON.stringify({username: username,password: password,email: email}),{headers: this.headers})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
}