import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/home/principal.component';
import { ProyectoActualComponent } from './pages/proyectosActuales/proyectoActual.component';
import { ProyectoAnteriorComponent } from './pages/proyectosAnteriores/proyectoAnterior.component';
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
    path: 'proyectoAnterior',
    component: ProyectoAnteriorComponent
  },
  {
    path: 'proyectoActual',
    component: ProyectoActualComponent
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
