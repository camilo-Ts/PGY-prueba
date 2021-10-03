import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalComponent } from './pages/home/principal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderPrincipalComponent } from './components/headerPrincipal/header-principal.component';
import { HeaderChatsComponent } from './components/headerChats/headerChats.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FooterChatsComponent } from './components/footerChats/footerChats.component';
import { ChatGrupalComponent } from './pages/chatGrupal/chatGrupal.component';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, TabsComponent, HeaderPrincipalComponent, HeaderChatsComponent, ChatComponent, FooterChatsComponent,ChatGrupalComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
