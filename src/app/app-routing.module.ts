import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/home/principal.component';
import { MiPerfilComponent } from './pages/miPerfil/miPerfil.component';
import { NuevoProyectoComponent } from './pages/nuevoProyecto/nuevoProyecto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: 'miPerfil',
    component: MiPerfilComponent
  },
  {
    path: 'nuevoProyecto',
    component: NuevoProyectoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
