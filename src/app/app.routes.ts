import { Routes } from '@angular/router';
import { HomeComponent, User } from '../pages';

export const routes: Routes = [
    {
        path: "",
        title: "App Home Page",
        component: HomeComponent
    },
    {
        path: "user",
        title: "User Page",
        component: User
    }
];
