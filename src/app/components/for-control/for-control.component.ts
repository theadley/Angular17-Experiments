import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignalStoreService} from "../../services/signal-store.service";

@Component({
  selector: 'app-for-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (item of store.list(); track item.id) {
        <li>{{item.name}}</li>
      }
      @empty {
        <li>Ain't nothin here bro</li>
      }
    </ul>
  `
})
export class ForControlComponent {
  protected store = inject(SignalStoreService);
}
