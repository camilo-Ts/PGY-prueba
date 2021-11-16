import {Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector:'opcionesProyecto-app',
    templateUrl:'./opcionesProyecto.component.html',
    styleUrls:['./opcionesProyecto.component.css']
})

export class OpcionesProyectoComponent {
    constructor(private navCtr:NavController) {
        
    }

    public irA(direccion:string){
        this.navCtr.navigateForward(direccion);
    }
}