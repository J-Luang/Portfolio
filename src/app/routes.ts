import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'project', component: ProjectComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}

];
