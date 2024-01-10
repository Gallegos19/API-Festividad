import { Router } from "express";
import festividadRoute from "./festividad.route.js";
const indexRoute = Router();
const prefijox = "Apix";

indexRoute.use(`/${prefijox}/festividad`,festividadRoute)

export default indexRoute;