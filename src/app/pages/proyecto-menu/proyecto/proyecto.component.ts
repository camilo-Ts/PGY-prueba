import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public progreso:number = 0.8;


  constructor(private menuCtr:MenuController, private navCtr:NavController, private parametro: ActivatedRoute, private ruta:Router) { }

  ngOnInit() {
    this.menuCtr.enable(true, "menuProyecto");
    // this.menuCtr.enable(true, "menuProyecto");
  }

  public abrirMenu(){
    this.menuCtr.open("menuProyecto")
  }

  public irA(ruta:string){
    // console.log(this.parametro.snapshot.paramMap.get(id));
    // this.navCtr.navigateForward(ruta)
    // this.navCtr.navigateRoot("proyectoMenu/"+this.parametro.snapshot.paramMap.get(id).toString+"/"+ruta);
    this.ruta.navigate(["integrantes"])
  }

}
