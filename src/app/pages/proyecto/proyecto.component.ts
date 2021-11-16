import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProyecto } from 'src/interfaces/IProyecto';
import { IUsuario } from 'src/interfaces/IUsuario';

@Component({
    selector: 'proyecto-app',
    templateUrl: './proyecto.component.html',
    styleUrls: ['./proyecto.component.css']
})

export class ProyectoComponent{

    private idProyecto: number;
    // public usuario:IUsuario={}

    public proyecto:IProyecto= {id:0,nombre:'',descripcion:'',estado:false,fecha_fn:new Date(), fecha_in:new Date(), jefe_proy:0};
    // public proyecto: IProyecto;

    private tiempoLoading:any;

    constructor(private parametro: ActivatedRoute, private sercicioProyecto: ProyectoService, public loading: LoadingController) { }

    ngOnInit() {
        this.idProyecto = parseInt(this.parametro.snapshot.paramMap.get("id"));
        // setTimeout(() => {    
        // }, 6000);
        this.sercicioProyecto.traerProyecto(this.idProyecto).subscribe((data: IProyecto) => { this.proyecto = data, console.log(this.proyecto)})

        this.presentLoading()
    }
    onClick() {
        console.log(this.proyecto);

    }
    async presentLoading() {
        this.tiempoLoading = await this.loading.create({
            cssClass: 'my-custom-class',
            message: 'Cargando proyecto...',
            duration: 1000
        });
        this.tiempoLoading.present();
    }

    // async cargar(){
    //     await this.sercicioProyecto.traerProyecto(this.idProyecto).subscribe(data=>{this.proyecto = data})
    // }
}