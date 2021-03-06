import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './pages/home/principal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderPrincipalComponent } from './components/headerPrincipal/header-principal.component';
import { ProyectoAnteriorComponent } from './pages/proyectosAnteriores/proyectoAnterior.component';
import { ProyectoActualComponent } from './pages/proyectosActuales/proyectoActual.component';

import { MiPerfilComponent } from './pages/miPerfil/miPerfil.component';
import { NuevoProyectoComponent } from './pages/nuevoProyecto/nuevoProyecto.component';
import { HeaderChatsComponent } from './components/headerChats/headerChats.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FooterChatsComponent } from './components/footerChats/footerChats.component';
import { ChatGrupalComponent } from './pages/chatGrupal/chatGrupal.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordComponent } from './pages/password/password.component';
import { OpcionesProyectoComponent } from './pages/opcionesProyecto/opcionesProyecto.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MisProyectosPipe } from './pipes/proyectos/mis-proyectos.pipe';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { ProyectoMenuModule } from './pages/proyecto-menu/proyecto-menu.module';
import { InvitarUsuarioComponent } from './pages/proyecto-menu/invitarUsuario/invitarUsuario.component';

@NgModule({
  declarations: [
    AppComponent, 
    PrincipalComponent, 
    TabsComponent, 
    HeaderPrincipalComponent, 
    MiPerfilComponent,
    NuevoProyectoComponent,
    ProyectoAnteriorComponent,
    ProyectoActualComponent, 
    HeaderChatsComponent, 
    ChatComponent, 
    FooterChatsComponent,
    ChatGrupalComponent, 
    RegisterComponent, 
    LoginComponent, 
    PasswordComponent,
    OpcionesProyectoComponent,
    ProyectoComponent,
    EditarPerfilComponent,
    // ProyectoMenuComponent,
    MisProyectosPipe,
    InvitarUsuarioComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, FormsModule, ProyectoMenuModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
