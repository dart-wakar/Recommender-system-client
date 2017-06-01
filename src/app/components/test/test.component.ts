import { Component,OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit  { 
    componentName = 'Test';
    token:any;

    constructor(private loginService:LoginService) {}

    ngOnInit() {
        this.login("wakar","wak19524");
    }

    login(username:string,password:string) {
        this.loginService.login(username,password)
            .subscribe(resp => {
                console.log(resp);
                this.token = resp.token;
            },
                err => console.log(err));
    }
}
