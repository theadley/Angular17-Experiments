import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignalStoreService} from "../../services/signal-store.service";
import {takeUntilDestroyed, toObservable, toSignal} from "@angular/core/rxjs-interop";
import {ListEntry} from "../models/list";
import {BehaviorSubject} from "rxjs";

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

  constructor(store: SignalStoreService) {
    toObservable(store.list)
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe((list) => {
        this.list = list;
        this.listObservable$.next(list);
      });
  }
}
