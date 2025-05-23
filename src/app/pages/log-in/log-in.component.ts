import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "log-in",
    imports: [ReactiveFormsModule],
    styleUrls: ["log-in.component.scss"],
    template: `
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()"> 
            <label>
                Name
                <input type="text" formControlName="name" />
            </label>
            <label>
                Email
                <input type="email" formControlName="email" />
            </label>
            <button type="submit" [disabled]="!profileForm.valid">Submit</button>
        </form>
        <h2>Profile Form</h2>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
        `
})

export class LogInPage {
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    })

    onSubmit() {
        alert(
            this.profileForm.value.name + " | " + this.profileForm.value.email
        )
    }
}