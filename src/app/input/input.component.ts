import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <p>The user's occupation is {{occupation}}</p>
    <p>The user's name is {{name}}</p>
  `,
  standalone: true,
})
export class AppInputComponent {
  @Input() occupation = '';
  @Input() name = '';
}
