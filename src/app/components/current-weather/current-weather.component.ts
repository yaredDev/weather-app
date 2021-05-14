import { environment } from './../../../environments/environment.prod';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  city$: string = 'Dar Es Salaam'
  currWeather: any = <any>{}
  temp: any
  temp_min: any
  temp_max:any
  iconUrl: string
  loading = true


  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.city$)
      .subscribe(res => {
        this.currWeather = res

        if (this.currWeather) {
          this.loading = false
        }
        this.temp = Math.ceil(this.currWeather.main.temp)
        this.temp_min= Math.ceil(this.currWeather.main.temp_min)
        this.temp_max = Math.ceil(this.currWeather.main.temp_max)

        this.currWeather.weather.forEach(cb => {
          this.iconUrl = `${environment.API_ICONS_URL}/${cb.icon}.png`
        });
      })
  }



}
