import { Router } from "express";
import profesoresControllers from "../controllers/profesoresControllers.js";

const profesoresRouter = Router();

profesoresRouter.get("/", profesoresControllers.mostrar); 

profesoresRouter.route("/:id")
                            .get(profesoresControllers.mostrarDetalle)

                            .post(profesoresControllers.ingresar)

                            .put(profesoresControllers.actualizar)

                            .delete(profesoresControllers.borrar); 

export default profesoresRouter;





