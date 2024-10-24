import {Component} from '@angular/core';

@Component({
  selector: 'app-compose',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class AppComposeComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-compose-root',
  template: `<section><app-compose/></section>`,
  standalone: true,
  imports: [AppComposeComponent],
})
export class AppComposeRootComponent {}
