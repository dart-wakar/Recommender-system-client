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
        this.getCurrentUser();
    }

    getCurrentUser() {
        this.userService.getCurrentUser()
            .subscribe(user => {
                console.log(user);
                this.user = user
            },err => console.log(err));
    }
}
