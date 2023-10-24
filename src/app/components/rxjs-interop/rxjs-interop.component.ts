import {Component, DestroyRef, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignalStoreService} from "../../services/signal-store.service";
import {takeUntilDestroyed, toObservable, toSignal} from "@angular/core/rxjs-interop";
import {ListEntry} from "../models/list";
import {BehaviorSubject, interval} from "rxjs";

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-interop.component.html',
  styleUrls: ['./rxjs-interop.component.sass']
})
export class RxjsInteropComponent {
  list: ListEntry[] = [];
  listObservable$ = new BehaviorSubject<ListEntry[]>([]);
  listSignal = toSignal(this.listObservable$);

  iAmAMemoryLeak;
  destroyRef = inject(DestroyRef);

  constructor(store: SignalStoreService) {
    // e.g. mySignal = toSignal(myNGRXStore.select(myCoolSelector$))
    // <span>{{mySignal()}}</span>

    toObservable(store.list)
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe((list) => {
        this.list = list;
        this.listObservable$.next(list);
      });

    this.iAmAMemoryLeak = this.listObservable$.subscribe(console.log);
    // Let's fix the memory leak
    // This is almost like a return statement in a useEffect with an empty dep array
    this.destroyRef.onDestroy(() => {
      // Code cleanup here
      if (this.iAmAMemoryLeak) {
        this.iAmAMemoryLeak.unsubscribe();
      }
    });

    // Magic! ✨
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(console.log);
  }
}
