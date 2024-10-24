import {Component} from '@angular/core';

@Component({
  selector: 'app-if',
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>Nope</span>
    }
  `,
  standalone: true,
})
export class AppIfComponent {
  isLoggedIn = true;
  isServerRunning = true;
}
