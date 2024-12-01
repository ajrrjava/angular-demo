import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { PlanetsViewComponent } from './components/planets-view/planets-view.component';
import { LoginComponent } from './components/login/login.component';
import { EarthquakesComponent } from './components/earthquakes/earthquakes.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { authGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

function redirectBasedOnAuth(authService: AuthService) {
  return authService.isAuthenticated() ? authService.getUrl() : 'login';
}

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardViewComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'planets',
    title: 'Planets',
    component: PlanetsViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'earthquakes',
    title: 'Earthquakes',
    component: EarthquakesComponent,
  },
  {
    path: 'cps',
    title: 'CPS Schools test 2012-2013',
    component: MapViewComponent,
  },
  { path: '**', redirectTo: 'dashboard' }
];

