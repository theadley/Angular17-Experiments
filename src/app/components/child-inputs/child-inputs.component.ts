import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListEntry} from "../models/list";

@Component({
  selector: 'app-child-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-inputs.component.html',
  styleUrls: ['./child-inputs.component.sass']
})
export class ChildInputsComponent {
  readonly list = signal<ListEntry[]>([]);

  @Input({required: true, alias: 'list'}) set _list(list: ListEntry[]) {
    this.list.set(list);
  }

  @Output() onNewName = new EventEmitter<string>();

  addName() {
    this.onNewName.emit('Tim');
  }
}
