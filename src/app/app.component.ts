import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";
import { Cars } from "./cars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    cars: Cars[] = [];
    carName: string = '';
    appTitle;
    colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'grey'
    ];

    constructor(private carsService: CarsService) {}

    ngOnInit() {
        this.appTitle = this.carsService.getAppTitle().subscribe((res) => {this.appTitle = res.value});
        console.log(this.appTitle);
    }

    loadCars() {
        this.carsService
            .getCars()
            .subscribe((cars: Cars[]) => {
                    // console.log(response);
                    this.cars = cars;
                    // next(cars) {}
                },
                (error) => { alert("Error!!!")},
            );
    }

    addCar() {
        this.carsService
            .addCar(this.carName)
            .subscribe((car: Cars) => {
               this.cars.push(car);
            });
        this.carName = '';
    }

    getRandColor() {
        const num = Math.round(Math.random() * this.colors.length - 1);
        return this.colors[num];
    }

    setNewColor(car: Cars) {
        this.carsService
            .changeColor(car, this.getRandColor())
            .subscribe((data) => {
               console.log(data);
            });
    }

    deleteCar(car: Cars) {
        this.carsService
            .removeCar(car)
            .subscribe((data) =>{
                this.cars = this.cars.filter(c => c.id !== car.id)
            });
    };



}
