import { Routes } from '@angular/router';
import { HomeComponent, User, LogInPage, PipesPage } from './pages';

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
    },
    {
        path: "log-in",
        title: "Login Page",
        component: LogInPage
    },
    {
        path: "pipes",
        title: "Pipes Page",
        component: PipesPage
    }
];
