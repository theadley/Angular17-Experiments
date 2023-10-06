import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-route-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy-route-inputs.component.html',
  styleUrls: ['./lazy-route-inputs.component.sass']
})
export class LazyRouteInputsComponent {
  @Input({required: true}) id?: string;
  @Input() list?: {name:string; id: number}[];
  @Input() search?: string;
}
