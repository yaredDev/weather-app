import { Observable } from 'rxjs';
import { fakeCities } from './../../lib/fake-cities';
import { City } from './../../lib/types';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchComponent implements OnInit {

  $cities: City[] = []
  data = {}
  city = ""
  loading = false
  displayCard = 'hidden'

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.$cities = fakeCities
    this.$cities.forEach(city => {
      this.data = { ...this.data, ...city }
    });
  }

  searchCity(f) {
    this.city = f.value.search.name
    this.displayCard = 'hidden'
    this.loading = true
    console.log(this.loading);
    this.weatherService.searchCity(this.city)
      .subscribe(res => {
        if (!res && this.loading) {
          this.loading = true
        }
        if (res) {
          this.loading = false
          this.displayCard = 'show'
        }
        console.log(this.loading);
      })
  }
}