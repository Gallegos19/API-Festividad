import { Router } from "express";
import { getFestividades, getbyIdFestividades, PostFestividades,putFestividadesControlller, deleteFestividadesControlller } from "../controllers/festividad.controller.js";
import { verificarJWT } from "../middleware/auth.middleware.js";
const festividadRoute = Router();

festividadRoute.get('/', getFestividades)
festividadRoute.get('/:id', getbyIdFestividades)
festividadRoute.post('/', verificarJWT, PostFestividades)
festividadRoute.put('/:id',verificarJWT, putFestividadesControlller )
festividadRoute.delete('/:id',verificarJWT, deleteFestividadesControlller)
export default festividadRoute;
              