import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  template: `
    <p>The user name is {{ name }} from {{ occupation }}</p>
    <p></p>
    <p>Prefered Framework:</p>
    <ul>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" height="50" width="50" [alt]="logoAlt" priority/>
      </li>
    </ul>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Input() occupation = '';

  logoUrl = 'favicon.ico';
  logoAlt = 'Angular Logo';
}
