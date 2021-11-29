import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private servicioUsuario: UsuarioService, private parametroUrl:ActivatedRoute) {}

  ngOnInit(){
    console.log(document.location.href  );
    
  }
  /**
   * cerrarSesion
   */
  public cerrarSesion() {
    this.servicioUsuario.cerrarSesion().subscribe(dato=>{return})
  }
}

