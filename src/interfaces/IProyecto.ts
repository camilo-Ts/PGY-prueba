import { IUsuario } from "./IUsuario";

export interface IProyecto {
    id?: number,
    nombre: string,
    descripcion: string,
    estado: boolean,
    fecha_in: Date,
    fecha_fn: Date,
    jefe_proy: number,
    integrantes?:Array<IUsuario>
}