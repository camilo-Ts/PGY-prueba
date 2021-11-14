import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { type } from 'os';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IProyecto } from 'src/interfaces/IProyecto';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'nuevoProyecto-app',
    templateUrl: './nuevoProyecto.component.html',
    styleUrls: ['./nuevoProyecto.component.css']
})

export class NuevoProyectoComponent {
    public proyecto: IProyecto = { nombre: "", descripcion: "", estado: true, fecha_in: new Date(), fecha_fn: new Date(), jefe_proy: 0 }
    private proyectoService: ProyectoService
    private usuarioService: UsuarioService
    constructor(private servicio: ProyectoService, private usuarioServicio: UsuarioService) {
        this.proyectoService = servicio;
        this.usuarioService = usuarioServicio;
    }
    public agregarProyecto() {
        let jefeProyecto: IUsuario = this.usuarioServicio.jefeProyecto().subscribe(usuario => { return usuario });
    }
}
