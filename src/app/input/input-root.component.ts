import { Component } from '@angular/core';
import { AppInputComponent } from './input.component';

@Component({
  selector: 'app-input-root',
  template: `
    <app-input occupation="Angular Developer" name="{{name}}"></app-input>
  `,
  standalone: true,
  imports: [AppInputComponent],
})
export class AppInputRootComponent {
  name = 'Rest'
}
