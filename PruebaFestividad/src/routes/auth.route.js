import { Router } from "express";
// import { getFestividades, getbyIdFestividades, PostFestividades,putFestividadesControlller, deleteFestividadesControlller } from "../controllers/festividad.controller.js";
import { createUser } from "../controllers/usuario.controller.js";
const usuarioRoute = Router();

// usuarioRoute.get('/', getUsuarioes)
// usuarioRoute.get('/:id', getbyIdUsuarioes)
usuarioRoute.post('/', createUser)
// usuarioRoute.put('/:id', putUsuarioesControlller )
// usuarioRoute.delete('/:id', deleteFestividadesControlller)
export default usuarioRoute;
              