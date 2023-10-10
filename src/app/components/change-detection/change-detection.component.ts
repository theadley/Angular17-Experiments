import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  localVariableToBeChecked = '';
}
