import {Component} from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
    selector:'header-principal',
    templateUrl:'./header-principal.component.html',
    styleUrls:['./header-principal.component.css']
})

export class HeaderPrincipalComponent {

    menu:string = "";
    constructor(private menuCtr: MenuController, private navCtr:NavController) {
        
    }

    abrirMenu(condicion:boolean, nombreMenu:string){
        if (condicion == true) {
            this.menuCtr.open(nombreMenu);
        }
    }

    redireccionPerfil(){
        this.navCtr.navigateForward('/miPerfil')
    }
}