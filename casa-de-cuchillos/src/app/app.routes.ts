import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'form', component: FormPageComponent },
    { path: 'list', component: ListPageComponent },
    { path: 'detail/:id', component: DetailPageComponent },
    { path: 'update/:id', component: UpdatePageComponent },
    { path: '**', redirectTo: '' }
];
