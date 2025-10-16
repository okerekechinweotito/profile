import { serve } from "@hono/node-server";
import app from "./app.js";
import { customLogger } from "./utils/logger.js";

const port = 3000;
const server = serve({ ...app, port }, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  server.close((error) => {
    if (error) {
      customLogger(error, "SIGTERM");
      process.exit(1);
    }
    process.exit(0);
  });
});
