import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string = '';
  constructor( private router: Router) { }

  handleSubmit(searchForm) {
    this.searchStr = searchForm.value.searchStr;
    this.router.navigate(['search_result/', this.searchStr]);
  }

  ngOnInit() {
  }

}
