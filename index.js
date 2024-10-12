console.clear();
import dotenv from 'dotenv';
import express from 'express';
import alumnosRouter from './routes/alumnosRoutes.js';
import profesoresRouter from './routes/profesoresRoutes.js';
import defaultRoutes from './routes/defaultsRoutes.js';





dotenv.config();
const port = process.env.port || 4500;
const app=express();

//middlewares
app.use(express.json());
app.use(express.text());

//ruta por defecto
app.get("/", (req, res)=>{
    res.send({"message":"Has iniciado el servidor en la raiz"});
});

//Rutas
app.use("/", defaultRoutes)
app.use("/api/alumnos",alumnosRouter);
app.use("/api/profesores", profesoresRouter);

app.listen(port, ()=>{
    console.log("Hola mundo", port);
});