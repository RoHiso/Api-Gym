import mysql from 'mysql2';

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'xAcademy2023',
    database:'gimnasio'
});

conexion.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Base de datos conectada');
});

export default conexion;