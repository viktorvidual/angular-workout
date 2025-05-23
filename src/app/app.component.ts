import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../components';

@Component({
  selector: 'app-root',
  imports: [NavComponent, RouterOutlet],
  template: `
    <app-nav />
    <router-outlet />
  `,
  // styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'my-angular-app';

  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
}
