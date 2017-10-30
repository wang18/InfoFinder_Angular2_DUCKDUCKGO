import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../service/search-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [SearchServiceService]
})
export class SearchResultComponent implements OnInit {
  searchRes: any[];
  searchStr: string = '';
  constructor(private actRoute: ActivatedRoute, private sservice: SearchServiceService) { }

  ngOnInit() {
    this.showRes();
  }
  showRes() {
    this.searchStr = this.actRoute.snapshot.params['searchTxt'];
    this.sservice.searchText(this.searchStr).subscribe(res => {
      this.searchRes = res;
    });
  }

}
