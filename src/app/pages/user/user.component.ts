import { Component } from "@angular/core";
import { UserComponent } from "../../components";
import { UpperCasePipe } from "@angular/common";

@Component({
    selector: "user",
    imports: [UserComponent, UpperCasePipe],
    template: `
    <h2>{{ welcomeMessage | uppercase}}
    <app-user name="Viktor" occupation="Varna" />
    `
})

export class User {
    welcomeMessage = 'nice to see you'
}