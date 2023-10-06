import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SignalStoreService} from "./services/signal-store.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>{{title}} is running</h1>

    <a routerLink="/">Home</a>
    <a routerLink="/not-lazy">Load Active</a>
    <a routerLink="/lazy">Load Lazy</a>
    <a routerLink="/lazy/123">Load Lazy ID</a>
    <a routerLink="/typed-forms">Strictly-Typed Forms</a>

    <ul>
      @for (item of store.list(); track item.id) {
          <li>{{item.name}}</li>
      }
      @empty {
        <li>Ain't nothin here bro</li>
      }
    </ul>

    <button (click)="emptyList()">Clear</button>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  protected store = inject(SignalStoreService);
  title = 'angular-17-6-test';

  emptyList() {
    this.store.list.set([]);
  }
}
