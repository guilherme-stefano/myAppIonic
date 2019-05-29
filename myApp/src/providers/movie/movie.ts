import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.getApiKey());
  }

  getPoupular(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getApiKey(): string {
    return "aqui não champs";
  }

}
