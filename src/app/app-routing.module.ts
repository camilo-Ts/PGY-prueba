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
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'home/miPerfil',
    redirectTo:'miPerfil'
  },
  
  {
    path: 'miPerfil/home',
    redirectTo:'home'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
