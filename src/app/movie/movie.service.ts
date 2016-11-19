import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MovieService {

  constructor(private http: Http) {
  }

  findMovie(titleParam: string, year?: number) {
    return this.http.get(this.buildUrl(titleParam, year)).map(res => res.json());
  }

  private buildUrl(param: string, year?: number) : string {
    if (year) {
      return `http://www.omdbapi.com/?t=${param}&y=${year}&plot=short&r=json`;
    }
    return `http://www.omdbapi.com/?t=${param}&plot=short&r=json`;

  }

}
