import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProyecto } from 'src/interfaces/IProyecto';

@Component({
    selector: 'principal-app',
    templateUrl: './principal.component.html',
    styleUrls:['./principal.component.css']
})

export class PrincipalComponent {

    public proyectos:Observable<any>;

    constructor(private navCtr: NavController, private servicio:ProyectoService) {
        
    }
    ngOnInit(){

        this.proyectos = this.servicio.listarProyectos();
        

    }


    cambiarPagina(id:number){
        this.navCtr.navigateForward('/proyecto/'+id);
    }
}