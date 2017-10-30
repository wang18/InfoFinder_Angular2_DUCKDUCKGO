import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import $ from 'jquery';
@Injectable()
export class SearchServiceService {

  constructor(private _http: Http) { }

  searchText(txt): Observable<any> {
    const url = 'http://api.duckduckgo.com/?q=' + txt + '&format=json&pretty=1';
    return this._http.get(url).map(res => {
        const data = res.json();
        return data.RelatedTopics;
    });
  }
}
