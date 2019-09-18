import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private http: HttpClient) { }


  getWheather(searchValue){
    return this.http.get('https://openweathermap.org/data/2.5/weather?q='+searchValue+'&appid=b6907d289e10d714a6e88b30761fae22')
  }

  
}
