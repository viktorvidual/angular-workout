import { Component } from "@angular/core";
import { DecimalPipe, DatePipe, CurrencyPipe } from "@angular/common";
import { ReversePipe } from "../../pipes/reverse.pipe";

@Component({
    selector: "pipes-page",
    imports: [DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
    template: `
        <ul>
            <li>Decimal {{ num | number: "1.2-2"}} </li>
            <li>Date with date {{ birthday | date : "medium"}} </li>
            <li>Currency with currency {{ cost | currency }} </li>
            <li>Rever with: reverse => {{ word }} {{ word | reverse }} </li>
        </ul>
    `
})

export class PipesPage {
    num = 103.1234;
    birthday = new Date(2023, 3, 2);
    cost = 4560.34;
    word = "diaper"
}