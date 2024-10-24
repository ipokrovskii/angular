import {Component} from '@angular/core';

@Component({
  selector: 'app-start',
  template: `
    Hello Universe
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})
export class AppStartComponent {}
