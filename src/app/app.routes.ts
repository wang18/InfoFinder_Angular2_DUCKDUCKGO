import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchComponent} from './search/search.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'search_result/:searchTxt',
    component: SearchResultComponent
  }, {
    path: 'search',
    component: SearchComponent
  }
];
