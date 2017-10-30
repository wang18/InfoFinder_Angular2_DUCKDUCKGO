import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routes';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    NavComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), HttpModule, FormsModule, RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
