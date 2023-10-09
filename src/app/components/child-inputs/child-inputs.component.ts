import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-child-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-inputs.component.html',
  styleUrls: ['./child-inputs.component.sass']
})
export class ChildInputsComponent {
  readonly list = signal<{ name: string; id: number }[]>([]);

  @Input({required: true, alias: 'list'}) set _list(list: { name: string; id: number }[]) {
    this.list.set(list);
  }

  @Output() onNewName = new EventEmitter<string>();

  addName() {
    this.onNewName.emit('Tim');
  }
}
