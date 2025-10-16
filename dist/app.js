import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";
import meRoutes from "./routes/me.route.js";
const app = new Hono();
app.use("*", cors());
app.use("*", prettyJSON());
app.get("/", (c) => {
    return c.json({
        status: 200,
        message: "Welcome to the Profile API!",
    });
});
app.route("/me", meRoutes);
export default app;
