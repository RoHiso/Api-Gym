import { Router } from "express";
import alumnosControllers from "../controllers/alumnosControllers.js";

const alumnosRouter = Router();

alumnosRouter.get("/", alumnosControllers.mostrar);

alumnosRouter.route("/:id")
                                .get(alumnosControllers.mostrarDetalle)
                                .post(alumnosControllers.ingresar)                        
                                .put(alumnosControllers.actualizar)
                                .delete(alumnosControllers.eliminar); 
 
export default alumnosRouter;

