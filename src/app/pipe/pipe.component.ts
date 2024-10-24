import {Component} from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-pipe',
  template: `
    {{username | lowercase }}
    <ul>
      <li>Number with "decimal" {{ num | number:"3.2-2" }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    Reverse Machine: {{ word | reverse }}
  `,
  standalone: true,
  imports: [LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
})
export class AppPipeComponent {
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';
}
