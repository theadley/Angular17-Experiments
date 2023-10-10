import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {SignalStoreService} from "../services/signal-store.service";
import {ListEntry} from "../components/models/list";

export const productsResolver: ResolveFn<ListEntry[]> = () => {
  const store = inject(SignalStoreService);
  return store.list();
};
