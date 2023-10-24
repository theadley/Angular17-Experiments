import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeDetectionComponent} from "../change-detection/change-detection.component";
import {LifecycleHooksComponent} from "../lifecycle-hooks/lifecycle-hooks.component";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule, ChangeDetectionComponent, LifecycleHooksComponent],
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.sass']
})
export default class LazyComponent {

}
