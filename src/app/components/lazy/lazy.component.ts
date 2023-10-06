import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.sass']
})
export default class LazyComponent {

}
