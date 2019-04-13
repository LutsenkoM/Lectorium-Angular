import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Cars } from "./cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

    apiURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // getCars(): Observable<any> {
  //     const headers = new HttpHeaders({
  //         'Content-Type' : 'aplication-json; charset=utf8',
  //     });
  //   return this.http.get('http://localhost:3000/cars', {
  //       headers: headers
  //       }
  //   );
  // }

    public getAppTitle() {
        return this.httpClient.get<any>(`${this.apiURL}/title`);
    }

    public getCars(){
        return this.httpClient.get<Cars[]>(`${this.apiURL}/cars`, {
            observe: 'body',
        });
    }

  addCar(carName: string): Observable<any> {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.httpClient.post('http://localhost:3000/cars', data);
  }

  changeColor(car: any, color: any): Observable<any> {
    car.color = color;
    return this.httpClient.put('http://localhost:3000/cars/' + car.id, car);
  }

  removeCar(car: any): Observable<any> {
      return this.httpClient.delete(`http://localhost:3000/cars/${car.id}`, car);
  }

}
