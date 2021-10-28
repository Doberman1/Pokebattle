import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http:HttpClient) { }

  getRamdonApodApi():Observable<Apod>{

    let rdate = this.getRandomDate(new Date(2020, 1, 1), new Date(2021, 10, 27));

    return this.http.get("https://api.nasa.gov/planetary/apod?api_key=H7KVIK3nELGoOVG70Mj500cN3YDXuiFsJbPSRHfD&date=" + rdate.toISOString().substring(0, 10) ) as Observable<Apod>;
  }
  
  getRandomDate(from: Date, to: Date) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }
}
