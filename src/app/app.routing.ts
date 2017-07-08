import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainRoomComponent} from './components/main-room/main-room.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
    {path: '',redirectTo: 'test',pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'mainroom',component: MainRoomComponent},
    {path: 'home',component:HomeComponent},
    {path: 'test',component: TestComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
