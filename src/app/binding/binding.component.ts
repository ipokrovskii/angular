import {Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  styleUrls: ['binding.component.css'],
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
  standalone: true,
})
export class AppBindingComponent {
  isEditable = false;
}
