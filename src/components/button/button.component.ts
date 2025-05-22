import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "my-button",
    styleUrls: ["./button.component.scss"],
    template: `<button class="btn" (click)="executeClick()">{{ text }}</button>`
})

export class Button { 
    @Input() text = ""
    @Output() onClick = new EventEmitter<string>()

    executeClick(){
        this.onClick.emit("🐢")
    }
}