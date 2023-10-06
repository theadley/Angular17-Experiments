import { ResolveFn } from '@angular/router';
import {inject, Signal} from "@angular/core";
import {SignalStoreService} from "../services/signal-store.service";

export const productsResolver: ResolveFn<{name: string; id: number}[]> = (route, state) => {
  const store = inject(SignalStoreService);
  return store.list();
};
