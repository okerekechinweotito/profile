import { Hono } from "hono";
import { getProfile } from "../controllers/me.controller.ts";

const meRoutes = new Hono();

meRoutes.get("/", ...getProfile);

export default meRoutes;
