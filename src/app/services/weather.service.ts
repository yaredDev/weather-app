import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API_URL = environment.API_URL

  constructor(
    private http: HttpClient
  ) {

  }

  getCurrentWeather(city: string) {
    return this.http.get(`${this.API_URL}/weather?q=${city}&units=metric&APPID=${environment.API_KEY}`)
  }

  // getCurrentWeather(lon:any, lat:any){
  //   return this.http.get(`${environment.API_URL}/weather?lon=${lon}&lat=${lat}&units=metric&APPID=${environment.API_KEY}`)
  // }

  // getCurrentLocation() {
  //   return navigator.geolocation.getCurrentPosition(position => {
  //     this.lon = position.coords.longitude
  //     this.lat = position.coords.latitude
  //     console.log(`longitude: ${this.lon} | latitude: ${this.lat}`)
  //   })
  // }

  searchCity(keyword) {
    return this.http.get(`${environment.API_URL}/weather?q=${keyword}&units=metric&APPID=${environment.API_KEY}`)
  }
}
