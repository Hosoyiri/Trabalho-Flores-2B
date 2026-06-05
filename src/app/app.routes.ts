import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FrameworksComponent } from './pages/frameworks/frameworks.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'frameworks', component: FrameworksComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: 'home' }
];