import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainRoomComponent } from './components/main-room/main-room.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { RecommendedMoviesComponent } from './components/recommended-movies/recommended-movies.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TestComponent } from './components/test/test.component';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { RecommendedMoviesService } from './services/recommended-movies.service';
import { PreferencesService } from './services/preferences.service';
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';

import { AppRoutingModule } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule ],
  declarations: [ AppComponent,
                  LoginComponent,
                  MainRoomComponent,
                  MovieComponent,
                  MoviesListComponent,
                  RecommendedMoviesComponent,
                  RegisterComponent,
                  SearchbarComponent,
                  TestComponent ],
  providers:    [ LoginService,
                  UserService,
                  RecommendedMoviesService,
                  PreferencesService,
                  MoviesService,
                  SearchService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
