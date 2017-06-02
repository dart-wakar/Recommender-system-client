import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { BASE_URL } from '../Constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    
    constructor(private http:Http) {}

    private userRegisterUrl = BASE_URL+"users/register/";
    private getCurrentUserUrl = BASE_URL+"currentuser/";
    private token = "ae7302528914c2723c9747dba4e68f9bf5da2834";
    private headers = new Headers({'Content-Type':'application/json'});

    register(username:string,password:string,email:string):Observable<any> {
        return this.http.post(this.userRegisterUrl,JSON.stringify({username: username,password: password,email: email}),{headers: this.headers})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }

    getCurrentUser():Observable<any> {
        let header = new Headers({'Authorization': "Token "+this.token});
        return this.http.get(this.getCurrentUserUrl,{headers: header})
                            .map((res) => res.json())
                            .catch((err) => {
                                console.log(err);
                                return Observable.throw(err.json().error || 'Server Error')
                            });
    }
}