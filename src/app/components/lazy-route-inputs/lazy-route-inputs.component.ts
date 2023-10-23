import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildInputsComponent} from "../child-inputs/child-inputs.component";
import {SignalStoreService} from "../../services/signal-store.service";
import {ActivatedRoute} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-lazy-route-inputs',
  standalone: true,
  imports: [CommonModule, ChildInputsComponent],
  templateUrl: './lazy-route-inputs.component.html',
  styleUrls: ['./lazy-route-inputs.component.sass'],
})
export class LazyRouteInputsComponent {
  @Input({required: true}) id?: string;
  @Input() list?: {name:string; id: number}[];
  @Input() search?: string;

  // I know the list is in the router inputs, this is only for the addName function
  store = inject(SignalStoreService);
  constructor(route: ActivatedRoute) {
    route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(console.log)
  }

  addName(name: string) {
    this.store.addName(name);
  }
}
