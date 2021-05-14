import { WeatherService } from './../../services/weather.service';
import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  cityName: string
  temp: number
  temp_min: number
  temp_max: number
  state: string
  iconUrl: string

  @Input('city-name')
  set city(city: string) {
    this.cityName = city
    this.weatherService.getCurrentWeather(city)
      .pipe(first())
      .subscribe((payload:any) => {
        this.state = payload.weather['0'].main
        this.temp = Math.ceil(payload.main.temp)
        this.temp_min = Math.ceil(payload.main.temp_min)
        this.temp_max = Math.ceil(payload.main.temp_max)
        this.iconUrl = `${environment.API_ICONS_URL}/${payload.weather['0'].icon}.png`
      })
  }

  // get city(){
  //   return this.cityName
  // }


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
