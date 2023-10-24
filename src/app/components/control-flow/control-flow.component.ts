import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IfControlComponent} from "../if-control/if-control.component";
import {ForControlComponent} from "../for-control/for-control.component";
import {DeferControlComponent} from "../defer-control/defer-control.component";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, IfControlComponent, ForControlComponent, DeferControlComponent],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.sass']
})
export default class ControlFlowComponent {
  mode: 'if' | 'for' | 'defer' = 'if';

  switchMode(newMode: 'if' | 'for' | 'defer') {
    this.mode = newMode;
  }
}
