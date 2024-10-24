import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class CarService {
  cars = ['Mustang GT', 'Lexus LC500', 'Honda Type R'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
