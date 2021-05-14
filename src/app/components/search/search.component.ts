import { Observable } from 'rxjs';
import { fakeCities } from './../../lib/fake-cities';
import { City } from './../../lib/types';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  $cities: City[] = []
  city = ""
  loading = false
  displayCard = 'hidden'

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.$cities = fakeCities
  }

  searchCity(f) {
    this.city = f.value.city
    this.displayCard = 'hidden'
    this.loading = true
    this.weatherService.searchCity(this.city)
      .subscribe(res => {
        if (!res && this.loading) {
          this.loading = true
        }
        if (res) {
          this.loading = false
          this.displayCard = 'show'
        }
      })
  }
}