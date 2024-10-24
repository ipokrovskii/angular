import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <button (click)="greet()">click here</button>
  `,
  standalone: true,
})
export class AppEventComponent {
  message = '';
  greet() {
    console.log('Hello, there 👋');
  };
  onMouseOver() {
    this.message = 'Way to go 🚀';
  };
}
