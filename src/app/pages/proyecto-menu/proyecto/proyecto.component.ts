import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProyecto } from 'src/interfaces/IProyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public progreso:number = 0.8;
  public proyecto:IProyecto = { nombre: "", descripcion: "", estado: true, fecha_in: new Date(), fecha_fn: new Date(), jefe_proy: 0 };


  constructor(private menuCtr:MenuController, private navCtr:NavController,private ruta:Router, private servicioProyecto:ProyectoService) { }

  ngOnInit() {
    // this.menuCtr.enable(true, "menuProyecto");
    // this.menuCtr.enable(true, "menuProyecto");
    this.servicioProyecto.traerProyecto(parseInt(window.localStorage.getItem("idProyecto"))).subscribe(data => {this.proyecto=data })
  }

  public abrirMenu(){
    this.menuCtr.open("first")
  }

  public irA(ruta:string){
    // console.log(this.parametro.snapshot.paramMap.get(id));
    // this.navCtr.navigateForward(ruta)
    // this.navCtr.navigateRoot("proyectoMenu/"+this.parametro.snapshot.paramMap.get(id).toString+"/"+ruta);
    this.ruta.navigate(["integrantes"])
  }

}
