import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-nav",
    standalone: true,
    styleUrls: ["./nav.component.scss"],
    imports: [RouterLink],
    template: `
        <nav>
            <a routerLink="/">Home</a>
            
            <a routerLink="/user">User</a>

            <a routerLink="/log-in">Login</a>
        </nav>
    `
})

export class NavComponent {}