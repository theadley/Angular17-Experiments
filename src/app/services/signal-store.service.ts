import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalStoreService {
  readonly list = signal<{name: string; id: number}[]>([
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
}
