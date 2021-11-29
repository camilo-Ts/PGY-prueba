import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoMenuRoutingModule } from './proyecto-menu-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { InvitarUsuarioComponent } from './invitarUsuario/invitarUsuario.component';


@NgModule({
  declarations: [ProyectoComponent, IntegrantesComponent, InvitarUsuarioComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    ProyectoMenuRoutingModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

})
export class ProyectoMenuModule { }
