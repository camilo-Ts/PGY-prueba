import { Pipe, PipeTransform } from '@angular/core';
import { IProyecto } from 'src/interfaces/IProyecto';

@Pipe({
  name: 'misProyectos'
})
export class MisProyectosPipe implements PipeTransform {

  transform(proyectos:Array<IProyecto>, id:number): Array<IProyecto> {

    let lista:Array<IProyecto> = [];
    for (let i = 0; i < proyectos.length; i++) {
      if (proyectos[i].jefe_proy == id) {
        console.log("Si es");
        lista.push(proyectos[i]);
      }
    }
    return lista;
  }

}