import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

    username:string;
    password:string;
    attempt:boolean = false;
    token:string;
    responseMessage:string;

    constructor(private loginService: LoginService,private router: Router) {}

    login() {
        this.loginService.login(this.username,this.password)
            .subscribe(tokenObject => {
                console.log(tokenObject.token);
                this.token = tokenObject.token;
                this.attempt = true;
                this.responseMessage = "Login Successful";
                localStorage.setItem("token",this.token);
                console.log(localStorage.getItem("token"));
                this.router.navigate(['home/']);
            },err => {
                console.log(err);
                this.attempt = true;
                this.responseMessage = "Login Failed!";
                this.username="";
                this.password="";
            });
    }
}
