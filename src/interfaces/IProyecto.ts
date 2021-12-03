import { IUsuario } from "./IUsuario";
export interface IIntegrante {
    nombre:string,
    rol:string
}
export interface IProyecto {
    id?: number,
    nombre: string,
    descripcion: string,
    estado: boolean,
    fecha_in: Date,
    fecha_fn: Date,
    jefe_proy: number,
    integrantes?:Array<IIntegrante>
}