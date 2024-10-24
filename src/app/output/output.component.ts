import { Component } from '@angular/core';
import { OutputChildComponent } from './child.component';

@Component({
  selector: 'app-output',
  template: `
    <app-output-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  standalone: true,
  imports: [OutputChildComponent],
})
export class AppOutputComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
    console.log(this.items);
  }
}
