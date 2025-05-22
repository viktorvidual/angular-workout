import { Component, Input } from "@angular/core";

@Component({
    selector: "app-user",
    template: `
    <p>The user name is {{ name }} from {{ occupation }}<p> 
    
    `
})

export class UserComponent {
    @Input() name = "";
    @Input() occupation = ""
}