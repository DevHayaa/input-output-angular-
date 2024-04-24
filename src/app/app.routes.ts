import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Users', pathMatch: 'full' },
    {
        path : 'Users' , 
        loadComponent: () => import('./table/table.component').then(c => TableComponent)
    }
];
