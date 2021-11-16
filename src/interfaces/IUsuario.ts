export interface IUsuario {
    id?:number,
    nombre:string,
    apellido:string,
    usuario:string,
    correo:string,
    telefono:number,
    contrasenia:string,
    perfil:{
        descripcion:string,
        proyectos:string
    }
}