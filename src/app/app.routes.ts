import { Routes } from '@angular/router';
import { TitleComponent } from './pages/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CreditsComponent } from './pages/credits/credits.component';

export const routes: Routes = [
    {
        path: '',
        component: TitleComponent
    },
    {
        path: 'main',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'credits',
        component: CreditsComponent
    }
];
