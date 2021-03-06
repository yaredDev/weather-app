import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    CurrentWeatherComponent,
    NavBarComponent,
    SearchComponent,
    WeatherCardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
