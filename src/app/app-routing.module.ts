import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatGrupalComponent } from './pages/chatGrupal/chatGrupal.component';
import { PrincipalComponent } from './pages/home/principal.component';
import { ProyectoActualComponent } from './pages/proyectosActuales/proyectoActual.component';
import { ProyectoAnteriorComponent } from './pages/proyectosAnteriores/proyectoAnterior.component';
import { MiPerfilComponent } from './pages/miPerfil/miPerfil.component';
import { NuevoProyectoComponent } from './pages/nuevoProyecto/nuevoProyecto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PasswordComponent } from './pages/password/password.component';
import { OpcionesProyectoComponent } from './pages/opcionesProyecto/opcionesProyecto.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';


const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PrincipalComponent
  },
  {
    path: 'chats',
    component: ChatComponent
  },
  {
    path: 'chatGrupal',
    component: ChatGrupalComponent
  },
  {
    path: 'miPerfil',
    component: MiPerfilComponent
  },
  {
    path: 'nuevoProyecto',
    component: NuevoProyectoComponent
  },
  {
    path: 'proyectosAnteriores',
    component: ProyectoAnteriorComponent
  },
  {
    path: 'proyectosActuales',
    component: ProyectoActualComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'opcionesProyecto',
    component: OpcionesProyectoComponent
  },
  {
    path: 'home/miPerfil',
    redirectTo:'miPerfil'
  },
  
  {
    path: 'home/opcionesProyecto',
    redirectTo:'opcionesProyecto'
  },
  {
    path: 'home/home',
    redirectTo:'home'
  },
  
  {
    path: 'miPerfil/home',
    redirectTo:'home'
  },
  {
    path: 'miPerfil/miPerfil',
    redirectTo:'miPerfil'
  },
  {
    path: 'miPerfil/opcionesProyecto',
    redirectTo:'opcionesProyecto'
  },
  {
    path: 'opcionesProyecto/opcionesProyecto',
    redirectTo:'opcionesProyecto'
  },
  {
    path: 'opcionesProyecto/home',
    redirectTo:'home'
  },
  {
    path: 'proyectosActuales/opcionesProyecto',
    redirectTo:'opcionesProyecto'
  },
  {
    path: 'proyectosActuales/home',
    redirectTo:'home'
  },
  {
    path: 'proyectosActuales/miPerfil',
    redirectTo:'miPerfil'
  },
  {
    path: 'opcionesProyecto/miPerfil',
    redirectTo:'miPerfil'
  },
  {
    path: 'modificarPerfil',
    component:EditarPerfilComponent
  },
  {
    path:'proyecto/:id',
    component:ProyectoComponent
  },
  {
    path:'proyectoMenu/:id',
    loadChildren: () => import("./pages/proyecto-menu/proyecto-menu.module").then(m => m.ProyectoMenuModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
