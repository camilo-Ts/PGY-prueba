import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { InvitarUsuarioComponent } from './invitarUsuario/invitarUsuario.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
{
  path:'',
  component:ProyectoComponent
},
{
  path:'integrantes',
  component:IntegrantesComponent
},
{
  path:'invitarUsuairo',
  component:InvitarUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoMenuRoutingModule { }
