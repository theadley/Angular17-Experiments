import {computed, Injectable, signal, effect} from '@angular/core';
import {ListEntry} from "../components/models/list";

@Injectable({
  providedIn: 'root'
})
export class SignalStoreService {
  readonly list = signal<ListEntry[]>([
    {
      name: 'One',
      id: 1
    },
    {
      name: 'Two',
      id: 2
    },
    {
      name: 'Three',
      id: 3
    },
    {
      name: 'Four',
      id: 4
    }
  ]);

  readonly nextId = computed(() => this.list().reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.id), 0) + 1);


  addName(name: string) {
    // No more mutate - only immutable changes allowed
    // this.list.mutate(list => list.push({name, id: this.nextId()}));
    this.list.update(list => [...list, {name, id: this.nextId()}]);
  }

  constructor() {
    // Effect needs access to the injection context which is most easily provided in constructor
    // https://angular.io/guide/signals#injection-context
    effect(() => {
      console.log(this.list());
    });
  }
}
