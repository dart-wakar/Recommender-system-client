import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    user:any;

    constructor(private userService:UserService) {}

    ngOnInit() {
        this.register("rounak","wak19524","rounak@gmail.com");
    }

    register(username:string,password:string,email:string) {
        this.userService.register(username,password,email)
            .subscribe(user => {
                console.log(user);
                this.user = user
            },err => console.log(err));
    }
}
