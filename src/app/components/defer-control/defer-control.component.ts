import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defer-control.component.html',
  styleUrls: ['./defer-control.component.sass']
})
export class DeferControlComponent {
  comments = signal<{content: string, id: number}[]>([])

  constructor() {
    setTimeout(() => {
      this.comments.set([
        {id: 0, content: 'Comment 1'},
        {id: 1, content: 'Comment 2'},
        {id: 2, content: 'Comment 3'},
        {id: 3, content: 'Comment 4'},
      ])
    }, 5000)
  }
}
