import conexion from "../db/conexion.js";


class AlumnosControllers {
    constructor(){
        this.dni;
        this.nombre;
        this.apellido;
        this.email; 
    };
    get(){
        return this.dni, this.nombre, this.apellido, this.email;
    };

    set(dni, nombre, apellido, email){
        this.dni= dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    mostrar(req, res){
       try {
         conexion.query('SELECT * FROM alumnos',(err,rows)=>{
            if(err){
                res.status(400).send(err);
            }
            res.status(200).json(rows);
         })
       } catch (error) {
         res.status(500).json(error.message);
       }
        
    };

    mostrarDetalle(req, res){
        const {id}=req.params;
        try {
            conexion.query(`SELECT * FROM gimnasio.alumnos WHERE alumnos.id = ?; `,[id],(err,rows)=>{
               if(err){
                   res.status(400).send(err);
               }
               res.status(200).json(rows);
            })
          } catch (error) {
            res.status(500).json(error.message);
          }
              
    };

    ingresar(req, res){
        const {id}=req.params;
        
        try {
            const {dni, nombre, apellido, email} = req.body;
            conexion.query(`INSERT INTO gimnasio.alumnos (id, dni, nombre, apellido, email) VALUES (NULL, ?, ?, ?, ?);`,
            [dni, nombre, apellido, email], (err, rows)=>{
                

                if (err){
                    res.status(400).send(err);                    
                }
                res.status(201).json(rows);
            });    
        } catch (err) {
            res.status(500).send(err.message);
        }
    };

    actualizar(req, res){
        const {id}=req.params;
        
       try {
            const {dni, nombre, apellido, email} = req.body;
            conexion.query(`UPDATE gimnasio.alumnos SET dni = ?, nombre = ?, apellido = ?, email=? WHERE alumnos.id = ?;`,
                          [dni, nombre, apellido, email,id], (err,rows)=>{

                            if (err){
                                res.status(400).send(err);                    
                            }
                            res.status(200).json(rows);
                        });    
       } catch (error) {
            res.status(500).send(err.message);
       }
    };

    eliminar(req, res){
        
        const {id}=req.params;
        
        try {             
             conexion.query(`DELETE FROM gimnasio.alumnos WHERE alumnos.id = ?;`,
                           [id], (err,rows)=>{
 
                             if (err){
                                 res.status(400).send(err);                    
                             }
                             res.status(200).json(rows);
                         });    
        } catch (error) {
             res.status(500).send(err.message);
        }

    };

}

export default  new AlumnosControllers();