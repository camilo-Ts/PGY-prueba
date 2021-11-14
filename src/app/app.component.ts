import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private servicioUsuario: UsuarioService) {}

  /**
   * cerrarSesion
   */
  public cerrarSesion() {
    this.servicioUsuario.cerrarSesion().subscribe(dato=>{return})
  }
}
