import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    componentName = 'Register';
    username:string;
    email:string;
    password:string;
    attempt:boolean = false;
    responseMessage:string;

    constructor(private userService: UserService,private router: Router) {}

    register() {
        this.userService.register(this.username,this.password,this.email)
            .subscribe(user => {
                console.log(user);
                this.attempt = true;
                this.responseMessage = "Registration Successful,Login Now!";
                window.alert("Registration Successful,Login Now!");
            },err => {
                console.log(err);
                this.attempt = true;
                this.responseMessage = "Registration Failed!";
                window.alert("Registration Failed!");
            })
    }

    goToLogin() {
        this.router.navigate(['login/']);
    }
}
