import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { GuideComponent } from './components/guide/guide';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'guide', component: GuideComponent },
    { path: '**', redirectTo: '' }
];
