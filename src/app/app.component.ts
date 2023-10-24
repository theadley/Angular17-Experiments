import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {SignalStoreService} from "./services/signal-store.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-200 mb-8">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" routerLink="/">{{title}}</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a routerLink="/typed-forms" routerLinkActive="bg-primary-focus">Strictly-Typed Forms</a></li>
          <li><a routerLink="/cdk-dialog" routerLinkActive="bg-primary-focus">CDK Dialog</a></li>
          <li><a routerLink="/images" routerLinkActive="bg-primary-focus">Image Directive</a></li>
          <li><a routerLink="/rxjs" routerLinkActive="bg-primary-focus">RxJS Interop</a></li>
          <li><a routerLink="/control" routerLinkActive="bg-primary-focus">Control Flow</a></li>
          <li>
            <details>
              <summary>
                Loading Strategies
              </summary>
              <ul class="p-2 bg-base-100">
                <li><a routerLink="/not-lazy" routerLinkActive="bg-primary-focus">Load Active</a></li>
                <li><a routerLink="/lazy" routerLinkActive="bg-primary-focus" [routerLinkActiveOptions]="{exact:true}">Load Lazy</a></li>
                <li><a routerLink="/lazy/123" routerLinkActive="bg-primary-focus" [routerLinkActiveOptions]="{exact:true}">Load Lazy ID</a></li>
                <li><a [routerLink]="['/lazy/', '123']" [queryParams]="{search: 'Tim'}" routerLinkActive="bg-primary-focus" [routerLinkActiveOptions]="{exact:true}">Load Lazy ID & search</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-base-200 rounded-2xl px-8 py-4 mx-auto mb-4 prose">
      Angular 17 release date: Nov 6 2023
    </div>

    <div class="bg-base-200 rounded-2xl p-8 mx-auto mb-8 prose">
      <h2>State List</h2>
      <ul>
        @for (item of store.list(); track item.id) {
          <li>{{item.name}}</li>
        }
        @empty {
          <li>Ain't nothin here bro</li>
        }
      </ul>
      <button class="btn btn-accent mr-4" (click)="emptyList()">Clear</button>
      <button class="btn btn-neutral" (click)="resetList()">Reset</button>
    </div>


    <div class="bg-base-200 rounded-2xl p-8 mx-auto prose">
      <h2>Router Outlet</h2>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  protected store = inject(SignalStoreService);
  title = 'Angular 17';

  emptyList() {
    this.store.list.set([]);
  }

  resetList() {
    this.store.resetList();
  }
}
