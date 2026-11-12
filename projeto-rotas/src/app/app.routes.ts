import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages';
import { Usuarios } from './usuarios/usuarios';

export const routes: Routes = [
  { path: 'home', component: PagesComponent },
  { path: 'usuarios', component: Usuarios },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
