import { Hono } from "hono";
import { getProfile } from "../controllers/me.controller";

const meRoutes = new Hono();

meRoutes.get("/", ...getProfile);

export default meRoutes;
