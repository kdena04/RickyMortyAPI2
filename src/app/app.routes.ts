import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episode/episode.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';


export const routes: Routes = [
 {
    path:'home',
    component: HomeComponent
 }, 
 {
   path:'episode',
   component:EpisodesComponent
 },
 {
   path:'personajes',
   component: PersonajesComponent
 },
 { path: 'acercade', 
  component: AcercadeComponent },
 {
    path:'**',
    redirectTo:'home'
 }
];
