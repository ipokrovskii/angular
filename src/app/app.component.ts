import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppValidatorComponent } from './validation/validation.component';
import { AppReactiveComponent } from './reactive/reactive.component';
import { UserComponent } from './forms/user.component';
import { AppStartComponent } from './component/start.component';
import { AppComposeRootComponent } from './composing/composing.component';
import { AppIfComponent } from './control-flow-if/if.component';
import { AppForComponent } from './control-flow-for/for.component';
import { AppBindingComponent } from './binding/binding.component';
import { AppEventComponent } from './event/event.component';
import { AppInputRootComponent } from './input/input-root.component';
import {AppOutputComponent} from './output/output.component';
import {AppDeferComponent} from './defer/defer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppValidatorComponent, AppReactiveComponent, UserComponent, AppStartComponent, AppComposeRootComponent, AppEventComponent, AppIfComponent, AppForComponent, AppBindingComponent, AppInputRootComponent, AppOutputComponent, AppDeferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
