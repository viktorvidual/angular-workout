import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from '../button/button.component';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, FormsModule, Button],
  template: `
  <div style="display: flex; flex-direction: column; gap: 8px">
    <p>The user name is {{ name }} from {{ occupation }}</p>
    <p>Prefered Framework: {{ favouriteFramework }}
    <ul>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" height="50" width="50" [alt]="logoAlt" priority/>
      </li>
    </ul>
    <label for="framework">
      Favourite framework
      <input id="framework" type="text" [(ngModel)]="favouriteFramework" />
    </label>
    <my-button text="Show Favourite Framework" (onClick)="showFramework()" />
</div>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Input() occupation = '';

  logoUrl = 'favicon.ico';
  logoAlt = 'Angular Logo';

  favouriteFramework=""

  showFramework() {
    alert(this.favouriteFramework || "not specified")
  }
}
