import { Component, inject } from "@angular/core";
import { Button, CommentsComponent } from "../../components";
import { CarService } from "../../services";

@Component({
    selector: "app-home",
    imports: [Button, CommentsComponent],
    template: `
        <div>
            <div style="display: flex; gap: 8px">
                <my-button text="Increase" (onClick)="addItem($event)" />
                <my-button text="Decrease" (onClick)="removeItem($event)" />
            </div>
            <p>🐢 we have {{ items.length }} turtles</p>
            @defer (on viewport) {
            <comments />
            } @placeholder {
            <p>Future Comments</p>
            } @loading (minimum 1s) {
            <p>Loading comments...</p>
            }
            <p>{{ cars }}</p>
        </div>
    `
})

export class HomeComponent {

  items: string[] = [];
  cars = ""

  // carService = inject(CarService)

  // constructor() { 
  //   this.cars = this.carService.getCars().join(" | ")
  // }

  constructor(private carSerive: CarService){
    this.cars = this.carSerive.getCars().join(" | ")
  }

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

}