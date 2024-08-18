import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [
    { path: 'user/:id', component: UserDetailComponent }, // spezifischere Route zuerst
    { path: 'user-detail', component: UserDetailComponent }, // spezifischere Route zuerst
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: DashboardComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Weiterleitung zur Standard-Route
    // { path: '**', redirectTo: '/dashboard' } // Fallback-Route für nicht definierte Pfade
];

