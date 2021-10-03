import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatGrupalComponent } from './pages/chatGrupal/chatGrupal.component';
import { PrincipalComponent } from './pages/home/principal.component';

const routes: Routes = [
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
