export interface IProyecto {
    id?:number,
    nombre:string,
    estado:boolean,
    fecha_in: Date,
    fecha_fn: Date,
    jefe_proy: number,
    gastos?:number
}