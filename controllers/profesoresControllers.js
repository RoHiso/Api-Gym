import connection from "../db/conexion.js";

class ProfesoresControllers{
    constructor(){

    }

    mostrar(req,res){
        res.json({ msg:"Ingresaste al EndPoint get all  PROFESORES : " });
    };
    
    mostrarDetalle(req,res) {
        const {id}=req.params;
        res.json({ msg:"Ingresaste al EndPoint getById  PROFESORES : " +id})
    } 
    
    ingresar(req,res){
        const {id}=req.params;
        res.json({ msg:"Ingresaste al EndPoint POST  PROFESORES : " +id})
    }
    actualizar(req,res){
        const {id}=req.params;
        res.json({ msg:"Ingresaste al EndPoint UPDATE  PROFESORES : " +id})
    }
    borrar(req,res){
        const {id}=req.params;
        res.json({ msg:"Ingresaste al EndPoint DELETE  PROFESORES : " +id})
    }

} 
export default new ProfesoresControllers();