import { Router } from "express";
import { getFestividades, getbyIdFestividades, PostFestividades,putFestividadesControlller, deleteFestividadesControlller } from "../controllers/festividad.controller.js";

const festividadRoute = Router();

festividadRoute.get('/', getFestividades)
festividadRoute.get('/:id', getbyIdFestividades)
festividadRoute.post('/', PostFestividades)
festividadRoute.put('/:id', putFestividadesControlller )
festividadRoute.delete('/:id', deleteFestividadesControlller)
export default festividadRoute;
              