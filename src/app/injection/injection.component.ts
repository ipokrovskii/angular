import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-inject',
  template: `
    <p>{{ cars }}</p>
    <p>Car Listing: {{ display }}</p>
  `,
  standalone: true,
})
export class AppInjectComponent {
  display = '';
  cars = new Array();
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
    this.cars = this.carService.getCars()
  }
}
