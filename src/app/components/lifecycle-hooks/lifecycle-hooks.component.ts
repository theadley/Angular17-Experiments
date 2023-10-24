import {afterNextRender, afterRender, Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.sass']
})
export class LifecycleHooksComponent implements OnInit{
  messages = signal<string[]>([]);

  addMessage(message: string) {
    this.messages.update(messages => [...messages, message]);
  }

  constructor() {
    console.log('I am constructed');
    this.addMessage('I am constructed');

    afterRender(() => {
      console.log('I have re-rendered');
      this.addMessage('I have re-rendered');
    });

    afterNextRender(() => {
      console.log('I have actually rendered for the first time');
      this.addMessage('I have actually rendered for the first time');
    });
  }

  ngOnInit() {
    console.log('I have initialised, SSR though, so...');
    this.addMessage('I have initialised, SSR though, so...');
  }
}
