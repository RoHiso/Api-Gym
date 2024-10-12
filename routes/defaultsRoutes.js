import {Router} from 'express';

const defaultRoutes = Router();

defaultRoutes.get('/', (req, res)=>{
    res.json({ msg:"Rutas por defecto" });
});

export default defaultRoutes;