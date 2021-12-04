import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProyecto, IIntegrante } from 'src/interfaces/IProyecto';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  constructor(private menuCtr: MenuController, private servicioProyecto: ProyectoService, private nav:Router) { }
  public proyecto: IProyecto;
  public integrantes: Array<IIntegrante>;
  public proyectoId:string = window.localStorage.getItem("idProyecto")

  ngOnInit() {
    this.menuCtr.enable(true, "menuProyecto");
    // this.menuCtr.enable(true, "menuProyecto");

    this.servicioProyecto.traerProyecto(parseInt(window.localStorage.getItem("idProyecto"))).subscribe(data => { this.integrantes = data.integrantes })
    // console.log();
    
  }

  public volver(){
    this.nav.navigate(["proyectoMenu/"+ this.proyectoId])
  }

  public abrirMenu() {
    this.menuCtr.open("menuProyecto")
  }
}
