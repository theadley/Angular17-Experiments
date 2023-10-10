import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeDetectionComponent} from "../change-detection/change-detection.component";

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule, ChangeDetectionComponent],
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.sass']
})
export default class LazyComponent {

}
