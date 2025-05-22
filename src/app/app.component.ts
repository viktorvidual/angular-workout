import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../components/user.component';
import { CommentsComponent } from '../components/comments/comments.component';
import { Button } from '../components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, Button, CommentsComponent],
  template: `
    <app-user name="Viktor" occupation="Varna" />
    <div style="display: flex; gap: 8px">
      <my-button text="Increase" (onClick)="addItem($event)" />
      <my-button text="Decrease" (onClick)="removeItem($event)" />
    </div>
    <p>🐢 we have {{ items.length }} turtles</p>
    @defer (on viewport) {
        <comments />
      } @placeholder {
        <p> Future Comments </p>
      } @loading (minimum 1s) {
        <p>Loading comments...</p>
      }
  `,
  // styleUrl: './app.component.sass'
})

export class AppComponent {
  title = 'my-angular-app'
  items: string[] = []
  numbers = Array.from({ length: 9 }, (_, i) => `${i + 1})`)

  addItem(item: string){
    this.items.push(item)
  }

  removeItem(item: string){
    if(this.items.length > 0){
      this.items.pop()
    }
  }

  handleClick(n: number) {
    console.log('Clicked:', n);
  }
}
