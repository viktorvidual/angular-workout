import { Component } from "@angular/core";
import { UserComponent } from "../../components";

@Component({
    selector: "user",
    imports: [UserComponent],
    template: `<app-user name="Viktor" occupation="Varna" />`
})

export class User {}