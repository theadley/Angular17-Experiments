import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isLoading()) {
      <button class="btn btn-primary">
        <span class="loading loading-spinner"></span>
        loading
      </button>
    }
    @else {
        <button class="btn btn-primary" (click)="setIsLoading()">Load</button>
    }
    OR
    <button class="btn btn-primary" (click)="setIsLoading()">
      @if (isLoading()) {
        <span class="loading loading-spinner"></span>
        loading
      }
      @else {
          Load
      }
    </button>
  `
})
export class IfControlComponent {
  isLoading = signal(false);

  setIsLoading() {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 2000);
  }
}
