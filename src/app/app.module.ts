import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './pages/home/principal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderPrincipalComponent } from './components/headerPrincipal/header-principal.component';
import { ProyectoAnteriorComponent } from './pages/proyectosAnteriores/proyectoAnterior.component';
import { ProyectoActualComponent } from './pages/proyectosActuales/proyectoActual.component';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, TabsComponent, HeaderPrincipalComponent, ProyectoAnteriorComponent, ProyectoActualComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
