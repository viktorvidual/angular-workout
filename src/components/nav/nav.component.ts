import { Component } from "@angular/core";

@Component({
    selector: "app-nav",
    standalone: true,
    styleUrls: ["./nav.component.scss"] ,
    template: `
        <nav>
            <a href="/">Home</a>
            |
            <a href="/user">User</a>
        </nav>
    `
})

export class NavComponent {}