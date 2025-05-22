import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../components/user.component';
import { ChildComponent } from '../components/child.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, ChildComponent],
  template: `
    <app-user name="Viktor" occupation="Varna" />
    <app-child (addItemEvent)="addItem($event)"/>
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  // styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'my-angular-app';

  items: string[] = [];

  addItem(item: string) {
    this.items.push(item)
  }

}
